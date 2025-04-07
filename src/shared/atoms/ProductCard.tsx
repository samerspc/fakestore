import { FC } from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  ref?: React.Ref<HTMLDivElement>;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  description,
  image,
  ref,
}) => {
  return (
    <div
      className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 relative hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      ref={ref}
      key={id}
    >
      <img
        src={image}
        alt="Product"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <span className="text-xl font-bold text-green-500 ">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
