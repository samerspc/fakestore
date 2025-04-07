import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../features/filtersSlice';

import CategoryList from '../shared/molecules/CategoryList';
import CategoryCard from '../shared/atoms/CategoryCard';

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const CategoryFilter: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<Category[]>(
          `${API_URL}/categories`,
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Ошибка получения категорий', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: number | null) => {
    dispatch(setCategoryFilter(categoryId));
  };

  return (
    <section>
      <CategoryList>
        <CategoryCard onClick={handleCategoryClick} name="Все" />
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            onClick={handleCategoryClick}
          />
        ))}
      </CategoryList>
    </section>
  );
};

export default CategoryFilter;
