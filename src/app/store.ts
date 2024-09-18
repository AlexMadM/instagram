import { configureStore } from "@reduxjs/toolkit";
import { inctagramApi } from "./services/inctagramApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [inctagramApi.reducerPath]: inctagramApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(inctagramApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
