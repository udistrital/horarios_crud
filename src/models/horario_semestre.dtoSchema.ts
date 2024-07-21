
import { ApiProperty } from '@nestjs/swagger';
import { Horario, HorarioDto } from './horario.dtoSchema';
import { EstadoCreacionSemestre, EstadoCreacionSemestreDto } from './estado_creacion_semestre.dtoSchema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

export class HorarioSemestreDto {

    readonly _id: string;

    @ApiProperty()
    readonly Nombre: string;

    @ApiProperty()
    readonly CodigoAbreviacion: string;

    @ApiProperty()
    readonly SemestreId: number;

    @ApiProperty()
    readonly PeriodoId: number;

    @ApiProperty()
    readonly HorarioId: HorarioDto; //Horario

    @ApiProperty()
    readonly EstadoCreacionSemestreId: EstadoCreacionSemestreDto; //EstadoCreacionSemestre

    @ApiProperty()
    readonly Observacion: string;

    @ApiProperty()
    Activo: boolean;

    @ApiProperty()
    FechaCreacion: Date;

    @ApiProperty()
    FechaModificacion: Date;

}

@Schema({ collection: 'horario_semestre' })
export class HorarioSemestre extends Document {

    _id: string;

    @Prop({ required: true })
    Nombre: string;

    @Prop({ required: true })
    CodigoAbreviacion: string;

    @Prop({ required: true })
    SemestreId: number;

    @Prop({ required: true })
    PeriodoId: number;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: Horario.name })
    HorarioId: Horario;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: EstadoCreacionSemestre.name })
    EstadoCreacionSemestreId: EstadoCreacionSemestre;

    @Prop({ required: true })
    Observacion: string;

    @Prop({ required: true })
    Activo: boolean;

    @Prop({ required: true })
    FechaCreacion: Date;

    @Prop({ required: true })
    FechaModificacion: Date;
}

export const HorarioSemestreSchema = SchemaFactory.createForClass(HorarioSemestre);