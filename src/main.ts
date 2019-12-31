import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'https://new-year-2o2o.herokuapp.com/',
    ],
  });
  await app.listen(3000);
}
bootstrap();
