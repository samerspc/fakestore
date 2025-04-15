import Product from "./Product";

interface Cart {
  products: Product[];
  productsCount: number;
  totalPrice: number;
}

export default Cart;