import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

async function loadSsmParameters() {
  const parameterStore = process.env.PARAMETER_STORE;
  if (!parameterStore) return;

  const client = new SSMClient({});

  const [userRes, passRes] = await Promise.all([
    client.send(
      new GetParameterCommand({
        Name: `/${parameterStore}/horarios_crud/db/username`,
      }),
    ),
    client.send(
      new GetParameterCommand({
        Name: `/${parameterStore}/horarios_crud/db/password`,
        WithDecryption: true,
      }),
    ),
  ]);

  process.env.HORARIOS_CRUD_USER = userRes.Parameter!.Value!;
  process.env.HORARIOS_CRUD_PASS = passRes.Parameter!.Value!;
}

async function bootstrap() {
  await loadSsmParameters();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Horarios CRUD')
    .setDescription('API CRUD para la gestión de los horarios')
    .setVersion('0.1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('swagger', app, document);

  await app.listen(8080);
}
bootstrap();
