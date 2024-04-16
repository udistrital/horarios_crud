
import { ApiProperty } from '@nestjs/swagger';

export class EstadoCreacionSemestreDto {

    readonly _id: string;

    @ApiProperty()
    readonly Nombre: string;

    @ApiProperty()
    readonly Descripcion: string;

    @ApiProperty()
    readonly CodigoAbreviacion: string;

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'estado_creacion_semestre' })
export class EstadoCreacionSemestre extends Document {

    _id: string;

    @Prop({ required: true })
    Nombre: string;

    @Prop({ required: true })
    Descripcion: string;

    @Prop({ required: true })
    CodigoAbreviacion: string;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const EstadoCreacionSemestreSchema = SchemaFactory.createForClass(EstadoCreacionSemestre);