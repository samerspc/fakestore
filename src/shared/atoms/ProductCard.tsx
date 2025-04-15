import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { FC, useState, useEffect } from 'react';
import Product from '../../entities/Product';

import { addToCart, removeFromCart } from '../../features/cartSlice';

interface ProductCardProps {
  item: Product;
  ref?: React.Ref<HTMLDivElement>;
}

const ProductCard:FC<ProductCardProps> = ({ item, ref }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products)

  const [inCart, setInCart] = useState<boolean>(false);

  useEffect(() => {
    let flag = false;
    products.forEach((i) => {
      if (i.id == item.id) {
        setInCart(true);
        flag = true;
      } 
    })
    if (!flag) {
      setInCart(false)
    }
  }, [products, item.id])

  return (
    <div
      className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 relative hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      ref={ref}
      key={item.id}
    >
      <img
        src={item.images[0]}
        alt="Product"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div>
      <span className="text-xl font-bold text-green-500 ">${item.price}</span>
        <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
        
        {inCart ? 
          <button className='w-full p-1 items-center bg-transparent'
          onClick={() => dispatch(removeFromCart(item))}>Убрать</button>
        :
          <button className='w-full p-1 items-center bg-transparent'
          onClick={() => dispatch(addToCart(item))}>Добавить</button>
        }
        
      </div>
    </div>
  );
};

export default ProductCard;
