import { sleep } from '@common/utils.ts';
import type { FormEvent } from 'react';
import { useReducer, type ReactNode } from 'react';
import styles from '../Form.module.scss';
import type { AuthFormInputName } from './AuthForm.utils.ts';
import { formReducer, initialState } from './AuthForm.utils.ts';

export const AuthForm = (): ReactNode => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    dispatch({ type: 'VALIDATE_FORM' });
    if (!state.isValid) {
      return;
    }
    console.debug(state.inputs);
    dispatch({ type: 'SET_PENDING', value: true });
    await sleep(1000);
    dispatch({ type: 'SET_PENDING', value: false });
    dispatch({ type: 'RESET_FORM' });
  };

  const handleChangeInput = (name: AuthFormInputName, value: string): void => {
    dispatch({ type: 'SET_FIELD', name, value });
  };

  return (
    <form className={styles.form} onSubmit={e => void handleSubmit(e)}>
      <div>
        <input
          type='text'
          name='email'
          value={state.inputs.email}
          onChange={e => {
            handleChangeInput('email', e.target.value);
          }}
        />
        {state.errors.email && <p className={styles.error}>{state.errors.email}</p>}
      </div>
      <div>
        <input
          type='password'
          name='password'
          value={state.inputs.password}
          onChange={e => {
            handleChangeInput('password', e.target.value);
          }}
        />
        {state.errors.password && <p className={styles.error}>{state.errors.password}</p>}
      </div>
      <button type='submit' className={styles.btn} disabled={state.isPending}>
        {state.isPending ? 'Pending...' : 'Submit'}
      </button>
    </form>
  );
};
