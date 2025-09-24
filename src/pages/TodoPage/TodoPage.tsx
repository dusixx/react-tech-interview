/* eslint-disable max-lines-per-function */
import { useState, type ReactNode } from 'react';
import { useAppDispatch, useTodos } from 'src/redux/hooks.ts';
import { addTodo, clearTodos, removeTodo, toggleTodo } from 'src/redux/todosSlice.ts';
import styles from './TodoPage.module.scss';

export default function TodoPage(): ReactNode {
  const todos = useTodos();
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAdd = (): void => {
    if (text) {
      dispatch(addTodo({ id: crypto.randomUUID(), text }));
    }
  };
  const isChecked = (id: string): boolean => {
    const todo = todos.find(todo => todo.id === id);
    return !!todo?.checked;
  };
  const handleToggleAll = (force?: boolean): void => {
    todos.forEach(todo => dispatch(toggleTodo({ id: todo.id, force })));
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <h1>Todo list</h1>
        <div className={styles.group}>
          <button className={styles.btn} onClick={() => dispatch(clearTodos())}>
            Clear
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              handleToggleAll(false);
            }}
          >
            Unselect All
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              handleToggleAll(true);
            }}
          >
            Select All
          </button>
        </div>
        <div className={styles.group}>
          <input
            type='text'
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <button className={styles.btn} onClick={handleAdd}>
            Add todo
          </button>
        </div>
        <ul className={styles.list}>
          {todos.map(todo => {
            const checked = isChecked(todo.id);
            return (
              <li key={todo.id} className={styles.item}>
                <input
                  type='checkbox'
                  checked={checked}
                  onClick={() => {
                    dispatch(toggleTodo({ id: todo.id }));
                  }}
                />
                <span style={{ textDecoration: checked ? 'line-through' : 'unset' }}>
                  {todo.text}
                </span>
                <button
                  className={styles.delete}
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
