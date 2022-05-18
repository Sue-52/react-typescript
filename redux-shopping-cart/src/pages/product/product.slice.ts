import { Product } from "@/service/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = {
  products: {},
};

const { reducer: ProductsReducer, actions } = createSlice({
  name: "products",
  initialState,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receivedProducts } = actions;
export default ProductsReducer;
