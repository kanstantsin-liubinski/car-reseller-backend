/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Включаем CORS для всех доменов (для разработки)
  await app.listen(4000); // Убедитесь, что порт 3000 (или другой, если изменили)
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
