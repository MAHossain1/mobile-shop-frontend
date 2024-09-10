import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './api/baseApi';
import authReducer from './features/auth/authSlice';

import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
