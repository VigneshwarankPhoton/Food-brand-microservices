import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductOutput {
  @Field(() => String, {
    nullable: false,
    description: 'Prouct _id',
  })
  _id: number;

  @Field(() => Int, {
    nullable: false,
    description: 'Prouct unique code',
  })
  productId: number;

  @Field(() => String, {
    nullable: false,
    description: 'Name of the product',
  })
  name: string;

  @Field(() => String)
  description?: string;

  @Field(() => Int, {
    nullable: false,
  })
  price: number;

  @Field(() => String, {})
  manufacture: string;

  @Field(() => String, {})
  category: string;

  @Field(() => Date, {})
  expired: Date;

  @Field(() => Boolean, {})
  status: boolean;
}
