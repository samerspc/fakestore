import { ReactNode, FC } from 'react';

interface ProductListProps {
  children: ReactNode;
}

const ProductList: FC<ProductListProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 relative left-1/2 transform -translate-x-1/2">
      {children}
    </div>
  );
};

export default ProductList;
