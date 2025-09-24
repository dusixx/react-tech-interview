import type { ReactNode } from 'react';
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export class Layout extends Component {
  public render(): ReactNode {
    return (
      <>
        <header className={styles.header}>Header</header>
        <main>
          <Outlet />
        </main>
        <footer className={styles.footer}>Footer</footer>
      </>
    );
  }
}
