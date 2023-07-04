import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: any = {
    origin: [],
    methods: [],
    allowHeaders: [],
  };

  if (corsOptions) {
    corsOptions.origin = true;
    corsOptions.methods = ['GET', 'POST', 'PUT', 'DELETE'];
    corsOptions.credentials = true;
    corsOptions.allowHeaders = [
      'authorization',
      'content-type',
      'access-control-allow-origin',
      'X-Requested-With',
    ];
  }
  app.enableCors(corsOptions);

  const docOptions = new DocumentBuilder()
    .setTitle('Product api')
    .setDescription('Product Graphql api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
