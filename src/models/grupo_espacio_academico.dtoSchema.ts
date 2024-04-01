
import { ApiProperty } from '@nestjs/swagger';

export class GrupoEspacioAcademicoDto {

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
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'grupo_espacio_academico' })
export class GrupoEspacioAcademico extends Document {

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
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const GrupoEspacioAcademicoSchema = SchemaFactory.createForClass(GrupoEspacioAcademico);