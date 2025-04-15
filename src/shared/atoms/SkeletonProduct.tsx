import { FC } from "react";
import ContentLoader from "react-content-loader";

const SkeletonProduct: FC = () => {
  return (
    <div className="w-full h-full">
      <ContentLoader
        speed={2}
        width="100%" // занимает всю ширину контейнера
        height={400}  // высота, соответствующая карточке (можно вынести в константу)
        viewBox="0 0 300 400" // фиксированное соотношение сторон (300x400)
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="w-full h-full"
      >
        {/* Изображение (60% от высоты) */}
        <rect x="0" y="0" rx="8" ry="8" width="300" height="240" />
        {/* Заголовок */}
        <rect x="10" y="260" rx="4" ry="4" width="200" height="20" />
        {/* Цена */}
        <rect x="10" y="290" rx="4" ry="4" width="150" height="20" />
      </ContentLoader>
    </div>
  );
};

export default SkeletonProduct;
