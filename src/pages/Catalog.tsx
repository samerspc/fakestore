import React, { useRef, useCallback } from 'react';
import { useProducts } from '../features/useProducts';
import Product from '../entities/Product';
import CategoryFilter from '../widgets/CategoryFilter';

import ProductList from '../shared/molecules/ProductList';
import ProductCard from '../shared/atoms/ProductCard';

const Catalog: React.FC = () => {
  const { products, loading, error, hasMore, loadMore } = useProducts();

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore],
  );

  return (
    <main className='flex flex-col gap-5'>
      <h1>Каталог товаров</h1>
      <CategoryFilter />
      <ProductList>
        {products.map((product: Product, index: number) => {
          if (products.length === index + 1) {
            return (
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.images[0]}
                ref={lastProductRef}
              />
            );
          } else {
            return (
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
            );
          }
        })}
      </ProductList>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
    </main>
  );
};

export default Catalog;
