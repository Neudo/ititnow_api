import '@wahyubucil/nestjs-zod-openapi/boot';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestjsSwagger } from '@wahyubucil/nestjs-zod-openapi';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ititnow API')
    .setDescription('Events, user api and webhook')
    .setVersion('1.0')
    .addTag('ititnow')
    .build();

  patchNestjsSwagger({ schemasSort: 'alpha' });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  const port = process.env.PORT || 8000;
  await app.listen(port);
}
bootstrap();
