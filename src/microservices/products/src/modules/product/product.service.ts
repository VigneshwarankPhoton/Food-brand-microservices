import { Injectable } from '@nestjs/common';
import { IUpdateProduct, IProduct } from './product.interface';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDTO): Promise<IProduct> {
    return this.productRepository.createProduct(createProductDto);
  }

  findAll() {
    return `This action returns all product`;
  }

  async getProductById(id: string): Promise<IProduct> {
    return await this.productRepository.getProductById(id);
  }

  async updateProduct(updateProductDto: IUpdateProduct): Promise<IProduct> {
    return await this.productRepository.updateProduct(updateProductDto);
  }

  async deleteProduct(id: string): Promise<string> {
    const deleted = this.productRepository.deleteProduct(id);
    return deleted
      ? `Product with id ${id} has been deleted successfully`
      : 'Something Went wrong';
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
