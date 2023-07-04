import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { createProduct, outputProduct } from './product';
import { ProductRepository } from './product.repository';
import { IProduct } from './product.interface';

describe('ProductService', () => {
  let service: ProductService;
  let repository: ProductRepository;
  //  const mockProductRepository = {
  //   createProduct : jest.fn().mockImplementation(IProduct => IProduct)
  //  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: ProductRepository,
          useValue: {
            createProduct: jest.fn().mockImplementation((IProduct) => IProduct),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<ProductRepository>(ProductRepository);
  });

  describe('create', () => {
    it('should create a new product', async () => {
      jest
        .spyOn(repository, 'createProduct')
        .mockResolvedValueOnce(outputProduct as IProduct);
      const result = await service.create(createProduct);
      console.log('result : ', result);
      expect(repository.createProduct).toBeCalled();
      expect(repository.createProduct).toBeCalledWith(createProduct);
      expect(result).toEqual(outputProduct);
    });
  });
});
