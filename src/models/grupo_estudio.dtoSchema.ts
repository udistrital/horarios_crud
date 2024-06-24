
import { ApiProperty } from '@nestjs/swagger';

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
    readonly ProyectoAcademicoId: string;

    @ApiProperty()
    readonly PlanEstudiosId: string

    @ApiProperty()
    readonly SemestreId: string

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'grupo_estudio' })
export class GrupoEstudio extends Document {

    _id: string;

    @Prop({ required: true })
    CodigoProyecto: string;

    @Prop({ required: true })
    IndicadorGrupo: string;

    @Prop({ required: true })
    CuposGrupos: number;

    @Prop({ required: true })
    ProyectoAcademicoId: string;

    @Prop({ required: true })
    PlanEstudiosId: string;

    @Prop({ required: true })
    SemestreId: string;

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