import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import app from "./app";
import { friendsApi } from "./friendsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    app,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(friendsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
