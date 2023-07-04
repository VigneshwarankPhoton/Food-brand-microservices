import { Module,  MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './utills/logger';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/store'),
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [ProductModule],
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
     // Add the Logger provider here
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
