/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { rndInt, sleep } from '@common/utils.ts';
import { useActionState, type ReactNode } from 'react';
import styles from './Form.module.scss';

export const Form = (): ReactNode => {
  const [state, formAction, isPending] = useActionState<{ status: string }, FormData>(
    async (_, formData: FormData) => {
      const fd = Object.fromEntries(formData.entries()) as Record<string, string>;
      await sleep(1000);
      return { status: `[${rndInt() ? 'success' : 'failed'}] code: ${fd.code}` };
    },
    { status: '' },
  );
  return (
    <form className={styles.form} action={formAction}>
      <input name='code' required />
      <button type='submit' className={styles.btn} disabled={isPending}>
        Submit
      </button>
      <p>{isPending ? 'Loading...' : state.status}</p>
    </form>
  );
};
