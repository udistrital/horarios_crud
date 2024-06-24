
import { ApiProperty } from '@nestjs/swagger';
import { HorarioSemestre, HorarioSemestreDto } from './horario_semestre.dtoSchema';
import { ColocacionEspacioAcademico, ColocacionEspacioAcademicoDto } from './colocacion_espacio_academico.dtoSchema';

export class HorarioSemestreColocacionEspacioAcademicoDto {

    readonly _id: string;

    @ApiProperty()
    readonly HorarioSemestreId: HorarioSemestreDto; //HorarioSemestre

    @ApiProperty()
    readonly ColocacionEspacioAcademicoId: ColocacionEspacioAcademicoDto; //ColocacionEspacioAcademico

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({ collection: 'horario_semestre_colocacion_espacio_academico' })
export class HorarioSemestreColocacionEspacioAcademico extends Document {

    _id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: HorarioSemestre.name })
    HorarioSemestreId: HorarioSemestre;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: ColocacionEspacioAcademico.name })
    ColocacionEspacioAcademicoId: ColocacionEspacioAcademico;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const HorarioSemestreColocacionEspacioAcademicoSchema = SchemaFactory.createForClass(HorarioSemestreColocacionEspacioAcademico);