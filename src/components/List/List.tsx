import { useTheme } from '@components/providers/ThemeProvider.tsx';
import type { ReactNode } from 'react';
import { Component, useEffect, useState } from 'react';
import styles from './List.module.scss';
import type { Character } from './List.utils.ts';
import { isLikeRickAndMortyApiResult } from './List.utils.ts';

const URL = 'https://rickandmortyapi.com/api/character/?page=1';

type ListClassState = {
  data: Character[];
};

export class ListClass extends Component {
  public state: ListClassState = {
    data: [],
  };
  public componentDidMount(): void {
    void fetch(URL)
      .then(async resp => {
        const data: unknown = await resp.json();
        if (isLikeRickAndMortyApiResult(data)) {
          this.setState({ data: data.results });
        }
      })
      .catch(() => {
        this.setState({ data: [] });
      });
  }
  public componentWillUnmount(): void {
    console.debug('will unmount');
  }
  public componentDidUpdate(_: unknown, prevState: Readonly<ListClassState>): void {
    console.debug(prevState);
  }
  public render(): ReactNode {
    return (
      <div className={styles.wrapper}>
        <h3>ListClass</h3>
        {this.state.data.length > 0 && (
          <button
            className={styles.btn}
            onClick={() => {
              this.setState({ data: this.state.data.slice(0, -1) });
            }}
          >
            Remove last
          </button>
        )}
        <ul className={styles.list}>
          {this.state.data.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export const ListFunc = (): ReactNode => {
  const [data, setData] = useState<Character[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    void fetch(URL)
      .then(async resp => {
        const data: unknown = await resp.json();
        if (isLikeRickAndMortyApiResult(data)) {
          setData(data.results);
        }
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
