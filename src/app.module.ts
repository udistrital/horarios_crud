import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/configuration';
import { LoggerMiddleware } from './logger/logger';
import { ParameterStoreModule } from './config/parameter_store.module';
import { ParameterStoreService } from './config/parameter_store.service';

import { ColocacionEspacioAcademicoController } from './controllers/colocacion_espacio_academico.controller';
import { ColocacionEspacioAcademicoService } from './services/colocacion_espacio_academico.service';
import { EstadoCreacionSemestreController } from './controllers/estado_creacion_semestre.controller';
import { EstadoCreacionSemestreService } from './services/estado_creacion_semestre.service';
import { EstadoCreacionController } from './controllers/estado_creacion.controller';
import { EstadoCreacionService } from './services/estado_creacion.service';
import { GrupoEstudioController } from './controllers/grupo_estudio.controller';
import { GrupoEstudioService } from './services/grupo_estudio.service';
import { HorarioController } from './controllers/horario.controller';
import { HorarioService } from './services/horario.service';
import { ColocacionEspacioAcademico, ColocacionEspacioAcademicoSchema } from './models/colocacion_espacio_academico.dtoSchema';
import { EstadoCreacionSemestre, EstadoCreacionSemestreSchema } from './models/estado_creacion_semestre.dtoSchema';
import { EstadoCreacion, EstadoCreacionSchema } from './models/estado_creacion.dtoSchema';
import { GrupoEstudio, GrupoEstudioSchema } from './models/grupo_estudio.dtoSchema';
import { Horario, HorarioSchema } from './models/horario.dtoSchema';

@Module({
  imports: [
    ParameterStoreModule,
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@` +
      `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`),
    MongooseModule.forFeature([
      { name: ColocacionEspacioAcademico.name, schema: ColocacionEspacioAcademicoSchema },
      { name: EstadoCreacionSemestre.name, schema: EstadoCreacionSemestreSchema },
      { name: EstadoCreacion.name, schema: EstadoCreacionSchema },
      { name: GrupoEstudio.name, schema: GrupoEstudioSchema },
      { name: Horario.name, schema: HorarioSchema },
    ])
  ],
  controllers: [AppController,
    ColocacionEspacioAcademicoController,
    EstadoCreacionSemestreController,
    EstadoCreacionController,
    GrupoEstudioController,
    HorarioController],
  providers: [AppService,
    ColocacionEspacioAcademicoService,
    EstadoCreacionSemestreService,
    EstadoCreacionService,
    GrupoEstudioService,
    HorarioService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
