// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../redux/features/cart/cartSlice";
import { bookApi } from "../redux/features/books/bookApi";
// store.js
import OrdersApi from "../order/OrdersApi"; // ✅ Default import matches the export

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [OrdersApi.reducerPath]: OrdersApi.reducer, // ✅ works now
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(OrdersApi.middleware), // ✅ works now
});
