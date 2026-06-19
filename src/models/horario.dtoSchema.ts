import { ApiProperty } from '@nestjs/swagger';
import { EstadoCreacion, EstadoCreacionDto } from './estado_creacion.dtoSchema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

// ? Para estructura documentación del swagger
export class HorarioDto {

    readonly _id: string;

    @ApiProperty()
    readonly Nombre: string;

    @ApiProperty()
    readonly CodigoAbreviacion: string;

    @ApiProperty()
    readonly Codigo: string;

    @ApiProperty()
    readonly ProyectoAcademicoId: number;
    
    @ApiProperty()
    readonly PlanEstudioId: number;

    @ApiProperty()
    readonly Semestres: number;

    @ApiProperty()
    readonly PeriodoId: number;

    // ? definir dto si relaciona a otra colección
    @ApiProperty()
    readonly EstadoCreacionId: EstadoCreacionDto; //EstadoCreacion

    @ApiProperty()
    readonly Observacion: string;

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

// ? Para definición de modelo en base de datos
@Schema({ collection: 'horario' })
export class Horario extends Document {

    _id: string;

    @Prop({ required: true })
    Nombre: string;

    @Prop({ required: true })
    CodigoAbreviacion: string;

    @Prop({ required: true })
    Codigo: string;

    @Prop({ required: true })
    ProyectoAcademicoId: number;

    @Prop({ required: true })
    PlanEstudioId: number;

    @Prop({ required: true })
    Semestres: number;

    @Prop({ required: true })
    PeriodoId: number;

    // ? definir esquemas si relaciona a otra coleccón
    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: EstadoCreacion.name })
    EstadoCreacionId: EstadoCreacion;

    @Prop({ required: true })
    Observacion: string;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;

}

export const HorarioSchema = SchemaFactory.createForClass(Horario);