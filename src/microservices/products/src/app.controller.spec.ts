import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection, connect, Model } from 'mongoose';
import { Product } from './modules/product/models/product.model';
import { getModelToken } from '@nestjs/mongoose';

describe('AppController', () => {
  let appController: AppController;
  let mongoConnection: Connection;
  let product: Model<Product>;

  beforeAll(async () => {
    mongoConnection = (await connect('mongodb://127.0.0.1:27017/store'))
      .connection;
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: getModelToken(Product.name), useValue: product },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
