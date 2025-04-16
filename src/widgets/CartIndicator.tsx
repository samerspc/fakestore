import { FC } from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartIndicator: FC = () => {
  const productsCount = useSelector(
    (state: RootState) => state.cart.productsCount,
  );

  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div
      className="fixed top-5 right-9 z-50 borde pointer cp"
      onClick={goToCart}
    >
      <svg
        width="55px"
        height="55px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="absolute top-0 right-0 bg-green-500 text-white rounded-full leading-[100%] w-5 h-5 flex justify-center items-center">
        {productsCount}
      </p>
    </div>
  );
};

export default CartIndicator;
