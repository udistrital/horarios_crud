import { ApiProperty } from '@nestjs/swagger';
import { HorarioSemestre, HorarioSemestreDto } from './horario_semestre.dtoSchema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export class ColocacionEspacioAcademicoDto {

    readonly _id: string;

    @ApiProperty()
    readonly EspacioAcademicoId: string;

    @ApiProperty()
    readonly EspacioFisicoId: number;

    @ApiProperty()
    readonly ColocacionEspacioAcademico: object;

    @ApiProperty()
    readonly ResumenColocacionEspacioFisico: object;

    @ApiProperty()
    readonly HorarioSemestreId: HorarioSemestreDto;

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

@Schema({ collection: 'colocacion_espacio_academico' })
export class ColocacionEspacioAcademico extends Document {

    _id: string;

    @Prop({ required: true })
    EspacioAcademicoId: string;

    @Prop({ required: true })
    EspacioFisicoId: number;

    @Prop({ type: Object })
    ColocacionEspacioAcademico: object;

    @Prop({ type: Object })
    ResumenColocacionEspacioFisico: object;

    @Prop({ required: false, type: MongooseSchema.Types.ObjectId, ref: HorarioSemestre.name })
    HorarioSemestreId: HorarioSemestre;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const ColocacionEspacioAcademicoSchema = SchemaFactory.createForClass(ColocacionEspacioAcademico);