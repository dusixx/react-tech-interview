import { CounterBtnClass, CounterBtnFunc } from '@components/CounterBtn/CounterBtn.tsx';
import { DelayedCounter } from '@components/etc/DelayedCounter.tsx';
import { AuthForm } from '@components/Form/AuthForm/AuthForm';
import { Form } from '@components/Form/Form.tsx';
import { ListClass, ListFunc } from '@components/List/index.ts';
import { useTheme } from '@components/providers/ThemeProvider.tsx';
import { WelcomeClass, WelcomeFunc } from '@components/Welcome/Welcome.tsx';
import type { ReactNode } from 'react';
import styles from './MainPage.module.scss';

export default function MainPage(): ReactNode {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className={styles.section}>
      <button className={styles.btn} onClick={toggleTheme}>
        {theme}
      </button>
      <details>
        <summary>Welcome</summary>
        <WelcomeClass name='Alex'>
          <p>Children1</p>
          <p>Children2</p>
        </WelcomeClass>
        <WelcomeFunc name='Jhon'>
          <p>Hello</p>
          <p>World</p>
        </WelcomeFunc>
      </details>

      <details>
        <summary>Button</summary>
        <CounterBtnFunc initialValue={20} />
        <CounterBtnClass initialValue={10} />
      </details>

      <details>
        <summary>List</summary>
        <ListClass />
        <ListFunc />
      </details>

      <details>
        <summary>Form</summary>
        <Form />
      </details>

      <details>
        <summary>AuthForm</summary>
        <AuthForm />
      </details>

      <details>
        <summary>Delayed counter</summary>
        <DelayedCounter />
      </details>
    </section>
  );
}
