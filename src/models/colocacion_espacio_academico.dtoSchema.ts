import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { GrupoEstudio, GrupoEstudioDto } from './grupo_estudio.dtoSchema';

export class ColocacionEspacioAcademicoDto {
  readonly _id: string;

  @ApiProperty()
  readonly EspacioAcademicoId: string;

  @ApiProperty()
  readonly EspacioFisicoId: string;

  @ApiProperty()
  readonly ColocacionEspacioAcademico: object;

  @ApiProperty()
  readonly ResumenColocacionEspacioFisico: object;

  @ApiProperty()
  readonly GrupoEstudioId: GrupoEstudioDto;

  @ApiProperty()
  readonly PeriodoId: number;

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
  EspacioFisicoId: string;

  @Prop({ type: Object })
  ColocacionEspacioAcademico: object;

  @Prop({ type: Object })
  ResumenColocacionEspacioFisico: object;

  @Prop({
    required: false,
    type: MongooseSchema.Types.ObjectId,
    ref: GrupoEstudio.name,
  })
  GrupoEstudioId: GrupoEstudio;

  @Prop({ required: true })
  PeriodoId: number;

  @Prop({ required: true })
  Activo: boolean;

  @Prop({ required: true })
  FechaCreacion: Date;

  @Prop({ required: true })
  FechaModificacion: Date;
}

export const ColocacionEspacioAcademicoSchema = SchemaFactory.createForClass(
  ColocacionEspacioAcademico,
);
