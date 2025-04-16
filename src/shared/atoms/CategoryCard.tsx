import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface CategoryCardProps {
  onClick: (id: number | null) => void;
  id?: number;
  name: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ onClick, id, name }) => {
  const selectedCategory = useSelector(
    (state: RootState) => state.filters.categoryId,
  );

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedCategory === id && id !== null) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }

    if (id === undefined && selectedCategory === null) {
      setIsSelected(true);
    }
  }, [selectedCategory, id]);

  return (
    <div
      onClick={() => onClick(id ? id : null)}
      className={`min-w-max flex flex-col items-center justify-center p-2 border rounded-lg cp
                border-black 
            ${isSelected ? 'bg-black' : 'bg-white'}`}
    >
      <span className={`text-sm ${isSelected ? 'text-white' : 'text-black'}`}>
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;
