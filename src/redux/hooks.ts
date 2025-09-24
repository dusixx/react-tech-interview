import { useDispatch, useSelector } from 'react-redux';
import type { StoreDispatch, StoreState } from './store.ts';
import type { Todo } from './todosSlice.ts';

export const useAppSelector = useSelector.withTypes<StoreState>();
export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();

export const useTodos = (): Todo[] => {
  return useAppSelector(state => state.todos.items);
};
