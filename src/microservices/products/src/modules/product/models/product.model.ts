import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  productId: number;

  @Prop({ required: true, minlength: 2, maxlength: 100 })
  name: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ required: true, min: 1 })
  price: number;

  @Prop()
  manufacture: string;

  @Prop({ default: 'veg', enum: ['veg', 'non-veg'] })
  category: string;

  @Prop({ required: true })
  expired: Date;

  @Prop({ required: true })
  status: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
