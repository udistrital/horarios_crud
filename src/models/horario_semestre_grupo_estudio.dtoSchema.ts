
import { ApiProperty } from '@nestjs/swagger';
import { HorarioSemestre, HorarioSemestreDto } from './horario_semestre.dtoSchema';
import { GrupoEstudio, GrupoEstudioDto } from './grupo_estudio.dtoSchema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export class HorarioSemestreGrupoEstudioDto {

    readonly _id: string;

    @ApiProperty()
    readonly HorarioSemestreId: HorarioSemestreDto; //HorarioSemestre

    @ApiProperty()
    readonly GrupoEstudioId: GrupoEstudioDto; //GrupoEstudio

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

@Schema({ collection: 'horario_semestre_grupo_espacio_academico' })
export class HorarioSemestreGrupoEstudio extends Document {

    _id: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: HorarioSemestre.name })
    HorarioSemestreId: HorarioSemestre;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: GrupoEstudio.name })
    GrupoEstudioId: GrupoEstudio;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const HorarioSemestreGrupoEstudioSchema = SchemaFactory.createForClass(HorarioSemestreGrupoEstudio);