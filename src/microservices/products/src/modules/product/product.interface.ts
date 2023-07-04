export interface IProduct {
  _id?: string;
  productId: number;
  name: string;
  description: string;
  price: number;
  manufacture?: string;
  category?: string;
  expired?: Date;
  status?: boolean;
}

export interface IUpdateProduct {
  _id?: string;
  productId?: number;
  name?: string;
  description?: string;
  price?: number;
  manufacture?: string;
  category?: string;
  expired?: Date;
  status?: boolean;
}
