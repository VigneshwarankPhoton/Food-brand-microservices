import { CreateProductDTO } from './dto/create-product.dto';

const createProduct: CreateProductDTO = {
  productId: 453423,
  name: 'dairy milk',
  description: 'chco melted cholacate',
  price: 10.0,
  manufacture: 'india',
  category: 'cholacate',
  expired: new Date('2023-06-22T13:02:43'),
  status: true,
};

const outputProduct = {
  _id: 'hq6712359371231',
  productId: 453423,
  name: 'dairy milk',
  description: 'chco melted cholacate',
  price: 10.0,
  manufacture: 'india',
  category: 'cholacate',
  expired: new Date('2023-06-22T13:02:43'),
  status: true,
};

export { outputProduct, createProduct };
