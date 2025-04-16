import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useEffect } from 'react';

import ProductList from '../shared/molecules/ProductList';
import ProductCard from '../shared/atoms/ProductCard';

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main className="flex flex-col">
    <h1>Корзина</h1>
    { products.length !== 0 && <h2>{totalPrice}</h2> }
    <ProductList> 
      {products.map((product) => (
        <ProductCard
          key={product.id}
          item={product}
        />
      ))}
      </ProductList>
      {products.length == 0 && <p>Корзина пуста</p>}
    </main>
  );
};

export default Cart;
