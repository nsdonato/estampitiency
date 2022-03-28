export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  count: number;
}

export interface Cart {
  addProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
  cartProducts: Record<Product["id"], CartItem>;
}
