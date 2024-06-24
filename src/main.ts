import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { environment } from './config/configuration';
import { GlobalExceptionFilter } from './errorhandler/error';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  
  app.enableCors();

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
