import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { environment } from './config/configuration';
import { GlobalExceptionFilter } from './errorhandler/error';
import * as yaml from 'js-yaml';
import helmet from 'helmet';     // related security headers 
import { ParameterStoreModule } from './config/parameter_store.module';
import { ParameterStoreService } from './config/parameter_store.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const parameterStoreService = app.get(ParameterStoreService);
  const prefix = process.env.PARAMETER_STORE;

  if (environment.RUNMODE !== 'dev') {
    if (!prefix) {
      throw new Error('PARAMETER_STORE no definido');
    }

    try {
      process.env.HORARIOS_CRUD_USER =
        await parameterStoreService.getParameter(
          `/${prefix}/horarios_mongo_crud/db/username`,
        );

      process.env.HORARIOS_CRUD_PASS =
        await parameterStoreService.getParameter(
          `/${prefix}/horarios_mongo_crud/db/password`,
        );

      console.log('Parámetros cargados desde AWS SSM');
    } catch (error) {
      console.error('Error cargando parámetros desde SSM', error);
      process.exit(1);
    }
  }

  app.use(helmet());
  app.useGlobalFilters(new GlobalExceptionFilter());
  
  app.enableCors({
    origin: (origin, callback) => {
      
      if (environment.RUNMODE === 'dev' || !environment.RUNMODE) {
        return callback(null, true);
      }
      
      const allowedOrigins = [/\.udistrital\.edu\.co$/];
      if (!origin || allowedOrigins.some(pattern => 
        pattern instanceof RegExp 
          ? pattern.test(origin) 
          : origin === pattern
      )) {
        return callback(null, true);
      }
      
      return callback(new Error('Not allowed by CORS'), false);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'User-Agent',
      'X-Amzn-Trace-Id',
    ],
    exposedHeaders: ['Content-Length'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Horarios_crud')
    .setDescription('API CRUD para la gestion de horarios')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger/swagger.json', JSON.stringify(document, null, 4));
  fs.writeFileSync('./swagger/swagger.yml', yaml.dump(document));
  SwaggerModule.setup('swagger', app, document);

  await app.listen(parseInt(environment.HTTP_PORT, 10) || 8080);
}
bootstrap();
