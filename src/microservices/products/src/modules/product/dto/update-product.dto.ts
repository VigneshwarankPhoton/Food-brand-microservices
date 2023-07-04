export interface UpdateProductDTO {
  _id: string;
  productId: number;
  name: string;
  description: string;
  price: number;
  manufacture: string;
  category: string;
  expired: Date;
  status: boolean;
}
