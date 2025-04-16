import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryFilter } from '../features/filtersSlice';

import useCategories from '../features/useCategories';

import CategoryList from '../shared/molecules/CategoryList';
import CategoryCard from '../shared/atoms/CategoryCard';
import SkeletonCategory from '../shared/atoms/SkeletonCategory';

const CategoryFilter: FC = () => {
  const dispatch = useDispatch();

  // const [categories, setCategories] = useState<Category[]>([]);
  const { categories, loading, error } = useCategories();

  const handleCategoryClick = (categoryId: number | null) => {
    dispatch(setCategoryFilter(categoryId));
  };

  return (
    <section>
      <CategoryList>
        {loading ? (
          <>
            {Array.from({ length: 6 }, (_, index) => (
              <SkeletonCategory key={index} />
            ))}
          </>
        ) : (
          <>
            <CategoryCard onClick={handleCategoryClick} name="Все" />
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                onClick={handleCategoryClick}
              />
            ))}
          </>
        )}
      </CategoryList>
    </section>
  );
};

export default CategoryFilter;
