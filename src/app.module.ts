import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/configuration';
import { LoggerMiddleware } from './logger/logger';
import { ColocacionEspacioAcademicoController } from './controllers/colocacion_espacio_academico.controller';
import { ColocacionEspacioAcademicoService } from './services/colocacion_espacio_academico.service';
import { EstadoCreacionSemestreController } from './controllers/estado_creacion_semestre.controller';
import { EstadoCreacionSemestreService } from './services/estado_creacion_semestre.service';
import { EstadoCreacionController } from './controllers/estado_creacion.controller';
import { EstadoCreacionService } from './services/estado_creacion.service';
import { GrupoEspacioAcademicoController } from './controllers/grupo_espacio_academico.controller';
import { GrupoEspacioAcademicoService } from './services/grupo_espacio_academico.service';
import { HorarioSemestreColocacionEspacioAcademicoController } from './controllers/horario_semestre_colocacion_espacio_academico.controller';
import { HorarioSemestreColocacionEspacioAcademicoService } from './services/horario_semestre_colocacion_espacio_academico.service';
import { HorarioSemestreGrupoEspacioAcademicoController } from './controllers/horario_semestre_grupo_espacio_academico.controller';
import { HorarioSemestreGrupoEspacioAcademicoService } from './services/horario_semestre_grupo_espacio_academico.service'
import { HorarioSemestreController } from './controllers/horario_semestre.controller';
import { HorarioSemestreService } from './services/horario_semestre.service';
import { HorarioController } from './controllers/horario.controller';
import { HorarioService } from './services/horario.service';
import { ColocacionEspacioAcademico, ColocacionEspacioAcademicoSchema } from './models/colocacion_espacio_academico.dtoSchema';
import { EstadoCreacionSemestre, EstadoCreacionSemestreSchema } from './models/estado_creacion_semestre.dtoSchema';
import { EstadoCreacion, EstadoCreacionSchema } from './models/estado_creacion.dtoSchema';
import { GrupoEspacioAcademico, GrupoEspacioAcademicoSchema } from './models/grupo_espacio_academico.dtoSchema';
import { HorarioSemestreColocacionEspacioAcademico, HorarioSemestreColocacionEspacioAcademicoSchema } from './models/horario_semestre_colocacion_espacio_academico.dtoSchema';
import { HorarioSemestreGrupoEspacioAcademico, HorarioSemestreGrupoEspacioAcademicoSchema } from './models/horario_semestre_grupo_espacio_academico.dtoSchema';
import { HorarioSemestre, HorarioSemestreSchema } from './models/horario_semestre.dtoSchema';
import { Horario, HorarioSchema } from './models/horario.dtoSchema';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${environment.USER}:${environment.PASS}@` +
      `${environment.HOST}:${environment.PORT}/${environment.DB}?authSource=${environment.AUTH_DB}`),
    MongooseModule.forFeature([
      { name: ColocacionEspacioAcademico.name, schema: ColocacionEspacioAcademicoSchema },
      { name: EstadoCreacionSemestre.name, schema: EstadoCreacionSemestreSchema },
      { name: EstadoCreacion.name, schema: EstadoCreacionSchema },
      { name: GrupoEspacioAcademico.name, schema: GrupoEspacioAcademicoSchema },
      { name: HorarioSemestreGrupoEspacioAcademico.name, schema: HorarioSemestreGrupoEspacioAcademicoSchema },
      { name: HorarioSemestreColocacionEspacioAcademico.name, schema: HorarioSemestreColocacionEspacioAcademicoSchema },
      { name: HorarioSemestre.name, schema: HorarioSemestreSchema },
      { name: Horario.name, schema: HorarioSchema },
    ])
  ],
  controllers: [AppController,
    ColocacionEspacioAcademicoController,
    EstadoCreacionSemestreController,
    EstadoCreacionController,
    GrupoEspacioAcademicoController,
    HorarioSemestreColocacionEspacioAcademicoController,
    HorarioSemestreGrupoEspacioAcademicoController,
    HorarioSemestreController,
    HorarioController],
  providers: [AppService,
    ColocacionEspacioAcademicoService,
    EstadoCreacionSemestreService,
    EstadoCreacionService,
    GrupoEspacioAcademicoService,
    HorarioSemestreColocacionEspacioAcademicoService,
    HorarioSemestreGrupoEspacioAcademicoService,
    HorarioSemestreService,
    HorarioService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
