import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../entities/Product";
import Cart from "../entities/Cart";

const initialState: Cart = {
    products: [],
    productsCount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
        const item = action.payload;
        if (!state.products.some(product => product.id === item.id)) {
            state.products.push(item);
            state.productsCount += 1;
            state.totalPrice += item.price;
          }
        console.log(state.products);
        console.log(state.productsCount);
        console.log(state.totalPrice);
    },
    removeFromCart(state, action: PayloadAction<Product>) {
        const item = action.payload;
        state.products = state.products.filter(product => product.id !== item.id);
        state.productsCount -= 1;
        state.totalPrice -= item.price;
        console.log(state.products);
        console.log(state.productsCount);
        console.log(state.totalPrice);
    },
}});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
    