import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Application');
  
  const port = 3000;
  await app.listen(port);
  logger.log(`Sample Backend Application is running on: http://localhost:${port}`);
}
bootstrap();
