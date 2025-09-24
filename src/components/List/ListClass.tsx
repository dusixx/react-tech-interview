import { getCharactersByName } from '@services/api.ts';
import type { CharacterInfo } from '@services/types.ts';
import type { ReactNode } from 'react';
import { Component } from 'react';
import styles from './List.module.scss';

type ListClassState = {
  data: CharacterInfo[];
};

export class ListClass extends Component {
  public state: ListClassState = {
    data: [],
  };
  public componentDidMount(): void {
    void getCharactersByName('')
      .then(info => {
        this.setState({ data: info });
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
