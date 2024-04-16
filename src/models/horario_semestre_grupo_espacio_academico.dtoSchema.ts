
import { ApiProperty } from '@nestjs/swagger';
import { HorarioSemestre, HorarioSemestreDto } from './horario_semestre.dtoSchema';
import { GrupoEspacioAcademico, GrupoEspacioAcademicoDto } from './grupo_espacio_academico.dtoSchema';

export class HorarioSemestreGrupoEspacioAcademicoDto {

    readonly _id: string;

    @ApiProperty()
    readonly HorarioSemestreId: HorarioSemestreDto; //HorarioSemestre

    @ApiProperty()
    readonly GrupoEspacioAcademicoId: GrupoEspacioAcademicoDto; //GrupoEspacioAcademico

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({ collection: 'horario_semestre_grupo_espacio_academico' })
export class HorarioSemestreGrupoEspacioAcademico extends Document {

    _id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: HorarioSemestre.name })
    HorarioSemestreId: HorarioSemestre;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: GrupoEspacioAcademico.name })
    GrupoEspacioAcademicoId: GrupoEspacioAcademico;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const HorarioSemestreGrupoEspacioAcademicoSchema = SchemaFactory.createForClass(HorarioSemestreGrupoEspacioAcademico);