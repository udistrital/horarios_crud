import { ApiProperty } from '@nestjs/swagger';

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
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const ColocacionEspacioAcademicoSchema = SchemaFactory.createForClass(ColocacionEspacioAcademico);