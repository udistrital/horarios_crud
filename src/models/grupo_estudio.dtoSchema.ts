
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { HorarioSemestre, HorarioSemestreDto } from './horario_semestre.dtoSchema';

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
    readonly HorarioSemestreId: HorarioSemestreDto;

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

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: HorarioSemestre.name })
    HorarioSemestreId: HorarioSemestre;

    @Prop({ type: Object })
    EspaciosAcademicos: object;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const GrupoEstudioSchema = SchemaFactory.createForClass(GrupoEstudio);