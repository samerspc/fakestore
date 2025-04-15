import { FC } from "react";
import ContentLoader from "react-content-loader";

const SkeletonCategory: FC = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={77} 
        height={38} 
        viewBox="0 0 77 38" 
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Изображение (60% от высоты) */}
        <rect x="0" y="0" rx="8" ry="8" width="77" height="38" />
      </ContentLoader>
    </div>
  );
};

export default SkeletonCategory;
