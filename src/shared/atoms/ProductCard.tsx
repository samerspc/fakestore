import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { FC, useState, useEffect } from 'react';
import Product from '../../entities/Product';

import { addToCart, removeFromCart } from '../../features/cartSlice';

interface ProductCardProps {
  item: Product;
  ref?: React.Ref<HTMLDivElement>;
}

const ProductCard: FC<ProductCardProps> = ({ item, ref }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const [inCart, setInCart] = useState<boolean>(false);

  useEffect(() => {
    let flag = false;
    products.forEach((i) => {
      if (i.id == item.id) {
        setInCart(true);
        flag = true;
      }
    });
    if (!flag) {
      setInCart(false);
    }
  }, [products, item.id]);

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

        {inCart ? (
          <button
            className="w-full p-1 items-center cp text-white bg-green-500 flex justify-center gap-2"
            onClick={() => dispatch(removeFromCart(item))}
          >
            <svg
              width="21px"
              height="21px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>В корзине</span>
          </button>
        ) : (
          <button
            className="w-full p-1 items-center bg-transparent cp"
            onClick={() => dispatch(addToCart(item))}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
