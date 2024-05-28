import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main')

  const app = await NestFactory.create(AppModule);
  await app.listen(3333, () => logger.log(`host is running in http://localhost:` + 3333));
}
bootstrap();
