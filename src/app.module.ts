import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './logger/logger';
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
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const user = encodeURIComponent(
          configService.get<string>('HORARIOS_CRUD_USER'),
        );
        const pass = encodeURIComponent(
          configService.get<string>('HORARIOS_CRUD_PASS'),
        );
        const host = configService.get<string>('HORARIOS_CRUD_HOST');
        const port = configService.get<string>('HORARIOS_CRUD_PORT');
        const db = configService.get<string>('HORARIOS_CRUD_DB');
        const authDb = configService.get<string>('HORARIOS_CRUD_AUTH_DB');

        console.log(
          '[MongoDB] URI:',
          'mongodb://' +
            user +
            ':' +
            pass +
            '@' +
            host +
            ':' +
            port +
            '/' +
            db +
            '?authSource=' +
            authDb,
        );

        return {
          uri: `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=${authDb}`,
        };
      },
      inject: [ConfigService],
    }),
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
