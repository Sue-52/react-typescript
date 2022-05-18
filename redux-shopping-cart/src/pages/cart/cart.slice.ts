import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppState } from "@/store";
import { CartItems, checkout, CheckoutResponse } from "@/service/api";

export interface CartState {
  items: { [productID: string]: number };
  checkoutState: "LOADING" | "READY" | "ERROR";
  errorMessage: string;
}

const initialState: CartState = {
  items: {},
  checkoutState: "READY",
  errorMessage: "",
};
// 1) 设置服务器端返回值的类型
// 2) 设置 acton creator 函数参数的类型
export const checkoutCart = createAsyncThunk<CheckoutResponse, CartItems>(
  "cart/checkout",
  async (_items: CartItems, thunkAPI) => {
    const state = thunkAPI.getState() as AppState;
    const items = state.cart.items;
    return await checkout(items);
  }
);

const { reducer: CartReducer, actions } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
      state.errorMessage = "";
      state.checkoutState = "READY";
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkoutCart.pending, (state) => {
      state.checkoutState = "LOADING";
    });
    builder.addCase(
      checkoutCart.fulfilled,
      (state, action: PayloadAction<{ success: boolean }>) => {
        const { success } = action.payload;
        if (success) {
          state.items = {};
          state.checkoutState = "READY";
        } else {
          state.checkoutState = "ERROR";
        }
      }
    );
    builder.addCase(checkoutCart.rejected, (state, action) => {
      state.checkoutState = "ERROR";
      state.errorMessage = action.error.message || "";
    });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = actions;
export default CartReducer;

export const getProductsCount = createSelector(
  (state: AppState) => state.cart.items,
  (items) => Object.values(items).reduce((current, item) => current + item, 0)
);

export const getTotalPrice = createSelector(
  (state: AppState) => state.cart.items,
  (state: AppState) => state.products.products,
  (items, products) => {
    return Object.entries(items)
      .reduce((current, [id, quantity]) => {
        return (current += quantity * products[id].price);
      }, 0)
      .toFixed(2);
  }
);
