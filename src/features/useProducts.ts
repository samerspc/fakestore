import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

import Product from '../entities/Product';

const API_URL = import.meta.env.VITE_API_URL;
const initialPage = 1;
const limit = 16;

export const useProducts = () => {
  const { categoryId } = useSelector((state: RootState) => state.filters);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageSize] = useState<number>(limit);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params: any = {
        offset: (currentPage - 1) * pageSize,
        limit: pageSize,
      };

      if (categoryId) {
        params.categoryId = categoryId;
      }

      const response = await axios.get<Product[]>(`${API_URL}/products`, {
        params,
      });
      const fetchedProducts = response.data;

      if (currentPage === initialPage) {
        setProducts(fetchedProducts);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
      }

      if (fetchedProducts.length < pageSize) {
        setHasMore(false);
      }
    } catch (error: any | unknown) {
      setError(error.message || 'Ошибка при загрузке данных');
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, categoryId]);

  useEffect(() => {
    setCurrentPage(initialPage);
    setProducts([]);
    setHasMore(true);
  }, [categoryId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return {
    products,
    loading,
    error,
    currentPage,
    pageSize,
    hasMore,
    loadMore,
  };
};
