import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todosSlice.ts';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
