// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS
  app.enableCors();

  // Habilita validação global (DTOs com class-validator)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Sobe o servidor
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
