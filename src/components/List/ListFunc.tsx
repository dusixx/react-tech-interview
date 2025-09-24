import { useTheme } from '@components/providers/ThemeProvider.tsx';
import { getCharactersByName } from '@services/api.ts';
import type { CharacterInfo } from '@services/types.ts';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import styles from './List.module.scss';

export const ListFunc = (): ReactNode => {
  const [data, setData] = useState<CharacterInfo[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    void getCharactersByName('')
      .then(info => {
        setData(info);
      })
      .catch(() => {
        setData([]);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3>ListFunc</h3>
      <ul
        className={styles.list}
        style={{ backgroundColor: theme === 'dark' ? 'gray' : 'transparent' }}
      >
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
