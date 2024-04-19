import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contacts/slice";
import { filtersSliceReducer } from "./filters/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSliceReducer } from "./auth/slice";

const authConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
  //   blacklist: ['contacts', "isError", "isLoading", "productData"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
    auth: persistReducer(authConfig, authSliceReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
