import { useState, useEffect, useCallback, use } from 'react';
import axios from 'axios';
import Category from '../entities/Category';

const API_URL = import.meta.env.VITE_API_URL;

const useCategorys = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategorys = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Category[]>(`${API_URL}/categories`);
      setCategories(response.data);
    } catch (error: any | unknown) {
      setError(error.message || 'Ошибка при загрузке данных');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategorys();
  }, [fetchCategorys]);

  return { categories, loading, error };
};

export default useCategorys;
