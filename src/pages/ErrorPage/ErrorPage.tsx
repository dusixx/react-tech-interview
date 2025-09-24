import { RoutePath } from '@common/constants.ts';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

export default function ErrorPage(): ReactNode {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Page not found</h2>
      <button onClick={() => void navigate(RoutePath.Home)} className={styles.btn}>
        Go Home
      </button>
    </div>
  );
}
