import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/pages/cart/cart.slice";
import ProductsReducer from "@/pages/product/product.slice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: ProductsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
