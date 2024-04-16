import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterDto } from 'src/filters/dto/filter.dto';
import { FiltersService } from 'src/filters/filters.service';
import { EstadoCreacionSemestre } from 'src/models/estado_creacion_semestre.dtoSchema';
import { Horario } from 'src/models/horario.dtoSchema';
import { HorarioSemestre as MainModel, HorarioSemestreDto as MainDto } from 'src/models/horario_semestre.dtoSchema';

@Injectable()
export class HorarioSemestreService {
    constructor(
        @InjectModel(MainModel.name)
        private readonly mainModel: Model<MainModel>,

        // ? inyectar modelos relacionados para verificar existencia y popular
        @InjectModel(Horario.name)
        private readonly horarioModel: Model<Horario>,
        @InjectModel(EstadoCreacionSemestre.name)
        private readonly estadoCreacionSemestreModel: Model<EstadoCreacionSemestre>
    ) { }

    /**
     * Revisa si los _ids de las colecciones relacionadas existen.
     * Detiene el post o put si no hay concordancia.
     * ? Agregar demás comprobaciones si se añaden más relaciones.
     * @param mainDto - modelo dto que se desea verificar.
     */
    private async checkRelated(mainDto: MainDto) {
        if (mainDto.HorarioId) {
            const horarioId = await this.horarioModel.exists({ _id: mainDto.HorarioId });
            if (!horarioId) {
                throw new Error(`HorarioId: ${mainDto.HorarioId} doesn't exist`);
            }
        }
        if (mainDto.EstadoCreacionSemestreId) {
            const estadoCreacionSemestreId = this.estadoCreacionSemestreModel.exists({ _id: mainDto.EstadoCreacionSemestreId });
            if (!estadoCreacionSemestreId) {
                throw new Error(`EstadoCreacionSemestreId: ${mainDto.EstadoCreacionSemestreId} doesn't exist`);
            }
        }
    }

    /**
    * Retorna la lista de colecciones a popular segun relación con la coleción actual.
    * ? Agregar aquí si se relacionan más colecciones.
    */
    private populatefields(): any[] {
        return [
            { path: Horario.name + 'Id' },
            { path: EstadoCreacionSemestre.name + 'Id' }
        ]
    }

    // ? funciones REST generalizadas
    async post(mainDto: MainDto): Promise<MainDto> {
        const dateNow = new Date();
        const newdoc = new this.mainModel(mainDto);
        newdoc.FechaCreacion = dateNow;
        newdoc.FechaModificacion = dateNow;
        await this.checkRelated(newdoc);
        return await newdoc.save();
    }

    async getAll(filterDto: FilterDto): Promise<MainDto[]> {
        const filterService = new FiltersService(filterDto);
        let populatefields = [];
        if (filterService.isPopulated()) {
            populatefields = this.populatefields();
        }
        return await this.mainModel.find(
            filterService.getQuery(),
            filterService.getFields(),
            filterService.getLimitAndOffset()
        ).sort(
            filterService.getSortBy()
        ).populate(populatefields);
    }

    async getById(_id: string): Promise<MainDto> {
        const doc = await this.mainModel.findById(_id);
        if (!doc) {
            throw new Error(`${_id} doesn't exist`);
        }
        return doc;
    }

    async put(_id: string, mainDto: MainDto): Promise<MainDto> {
        mainDto.FechaModificacion = new Date();
        if (mainDto.FechaCreacion) {
            delete mainDto.FechaCreacion;
        }
        await this.checkRelated(mainDto);
        return await this.mainModel.findByIdAndUpdate(_id, mainDto, { new: true });
    }

    async delete(_id: string): Promise<MainDto> {
        //const deleted = await this.mainModel.findByIdAndDelete(_id);
        const deleted = await this.mainModel.findByIdAndUpdate(_id, { Activo: false }, { new: true });
        if (!deleted) {
            throw new Error(`${_id} doesn't exist`);
        }
        return deleted;
    }

}
