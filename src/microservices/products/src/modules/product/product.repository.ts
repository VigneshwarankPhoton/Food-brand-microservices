import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { Model } from 'mongoose';
import { IUpdateProduct, IProduct } from './product.interface';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<IProduct>,
  ) {}
  async createProduct(createProductDto: CreateProductDTO): Promise<IProduct> {
    try {
      const product = new this.productModel(createProductDto);
      const newProduct = await product.save();
      return newProduct;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getProductById(id: string) {
    let product;
    try {
      product = await this.productModel.findById({ _id: id }).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!product) {
      throw new NotFoundException('The product with this id does not exist');
    }

    return product;
  }

  async updateProduct(updateProduct: IUpdateProduct) {
    let product;
    try {
      product = await this.productModel
        .findOneAndUpdate({ _id: updateProduct._id }, updateProduct, {
          new: true,
        })
        .exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!product) {
      throw new NotFoundException('Error trying to update product');
    }

    return product;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const product = await this.productModel.findByIdAndDelete(id).exec();
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return true;
  }
}
