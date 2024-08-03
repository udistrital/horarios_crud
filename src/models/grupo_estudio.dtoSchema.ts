import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Horario, HorarioDto } from './horario.dtoSchema';
import { EstadoCreacionSemestre, EstadoCreacionSemestreDto } from './estado_creacion_semestre.dtoSchema';

export class GrupoEstudioDto {

    readonly _id: string;

    @ApiProperty()
    readonly CodigoProyecto: string;

    @ApiProperty()
    readonly IndicadorGrupo: string;

    @ApiProperty()
    readonly CuposGrupos: number;

    @ApiProperty()
    readonly EspaciosAcademicos: object;

    @ApiProperty()
    readonly SemestreId: number;

    @ApiProperty()
    readonly HorarioId: HorarioDto; 

    @ApiProperty()
    readonly EstadoCreacionSemestreId: EstadoCreacionSemestreDto;

    @ApiProperty()
    readonly Observacion: string;

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

@Schema({ collection: 'grupo_estudio' })
export class GrupoEstudio extends Document {

    _id: string;

    @Prop({ required: true })
    CodigoProyecto: string;

    @Prop({ required: true })
    IndicadorGrupo: string;

    @Prop({ required: true })
    CuposGrupos: number;

    @Prop({ type: Object })
    EspaciosAcademicos: object;

    @Prop({ required: true })
    SemestreId: number;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: Horario.name })
    HorarioId: Horario;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: EstadoCreacionSemestre.name })
    EstadoCreacionSemestreId: EstadoCreacionSemestre;

    @Prop({ required: true })
    Observacion: string;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const GrupoEstudioSchema = SchemaFactory.createForClass(GrupoEstudio);
