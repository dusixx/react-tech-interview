import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  text: string;
  checked?: boolean;
};
type TodoState = {
  items: Todo[];
};
const initialState: TodoState = {
  items: [],
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.items.push(payload);
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    toggleTodo: (state, { payload }: PayloadAction<{ id: string; force?: boolean }>) => {
      const todo = state.items.find(item => item.id === payload.id);
      if (todo) {
        if (typeof payload.force !== 'undefined') {
          todo.checked = payload.force;
        } else {
          todo.checked = !todo.checked;
        }
      }
    },
    clearTodos: state => {
      state.items = [];
    },
  },
});
export const { addTodo, removeTodo, clearTodos, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
