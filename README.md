# Fakestore


## Описание
Данный проект представляет собой интернет-магазин, реализованный с использованием React + TypeScript и Redux. 
- **Пагинация:** Пагинация с эффектом бесконечной прокрутки, при достижении конца списка автоматически подгружаются новые товары.
- **Фильтрация товаров по категориям:** Фильтры хранятся в глобальном состоянии Redux, что позволяет менять выбор фильтра и обновлять список товаров.
- **Интеграция с API:** Для получения данных о товарах и категориях используется публичное API [Platzi Fake Store API](https://fakeapi.platzi.com/en).
- **Функуционал корзины:** Добавление/Удаление товаров в корзину через Redux и redux-persist.
- **Загрузка:** Отображение анимированных скелетонов во время загрузки как на Ozon.ru.


## Используемые технологии
- **React**
- **Vite**
- **TypeScript**
- **React Router** - маршрутизация
- **Redux Toolkit** - глобальное управлениям состояниями фильтров
- **Redux-persist** - хранение глобальных состояний в local storage 
- **Tailwind CSS** - утилитарные классы для верстки
- **Axios** - для работы с API
- **Prettier**
- **ESLint**


## Структура проекта
Архитектура **Feature-Sliced + Atomic** для маштабируемости в будущем

```bash
src/ 
│── app/ # Конфигурация приложения (роутинг, API, стили) 
│── shared/ # Общие хуки, утилиты, UI-компоненты (Atomic Design) 
│ ├── ui/ # Atomic Design компоненты 
│ │ ├── atoms/ # Button, Input, Icon 
│ │ ├── molecules/ # SearchBar, ProductCard 
│ │ ├── organisms/ # ProductList, Navbar 
│ │ ├── templates/ # Page layouts (ProductPageTemplate) 
│── entities/ # Бизнес-сущности (Product, Cart, User) 
│── features/ # Отдельные функции (AddToCart, Search, Filters) 
│── widgets/ # Готовые UI-блоки (Navbar, CartDropdown) 
│── pages/ # Готовые страницы (HomePage, ProductPage, CartPage) 
└── index.tsx
```