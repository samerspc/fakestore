import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { useEffect } from "react";

const Bucket:React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.cart.products);

    useEffect(() => {
      console.log(products)
    }, [products])

    return (
    <main className='flex flex-col gap-5'>
      <h1>Корзина</h1>
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-2">
          <h2>{product.title}</h2>
          <p>Цена: {product.price}</p>
          <button
            onClick={() => dispatch({ type: "cart/removeFromCart", payload: product })}
            className="bg-red-500 text-white p-2 rounded"
          >
            Удалить из корзины
          </button>
        </div>
      ))}
      {products.length == 0 && <p>Корзина пуста</p>}
    </main>
  );
}

export default Bucket;