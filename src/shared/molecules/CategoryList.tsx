interface CategoryListProps {
    children: React.ReactNode;
}

const CategoryList: React.FC<CategoryListProps> = ({children}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-start">
      {children}
    </div>
  );
}

export default CategoryList;