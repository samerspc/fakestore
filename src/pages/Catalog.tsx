import React, { useRef, useCallback } from 'react';
import { useProducts } from '../features/useProducts';
import type Product from '../entities/Product';

import CategoryFilter from '../widgets/CategoryFilter';
import ProductList from '../shared/molecules/ProductList';
import ProductCard from '../shared/atoms/ProductCard';
import SkeletonProduct from '../shared/atoms/SkeletonProduct';
import CartIndicator from '../widgets/CartIndicator';

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
    <main className="flex flex-col gap-5">
      <h1>Каталог товаров</h1>
      <CartIndicator />
      <CategoryFilter />
      <ProductList>
        {products.map((product: Product, index: number) => {
          if (products.length === index + 1) {
            return (
              <ProductCard
                key={product.id}
                item={product}
                ref={lastProductRef}
              />
            );
          }
          return <ProductCard key={product.id} item={product} />;
        })}
        {loading &&
          Array.from({ length: 16 }).map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
      </ProductList>
      {error && <p>Ошибка: {error}</p>}
    </main>
  );
};

export default Catalog;
