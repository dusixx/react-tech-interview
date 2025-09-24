import { Component, useState, type ReactNode } from 'react';
import styles from './CounterBtn.module.scss';

type CounterBtnProps = {
  initialValue?: number;
};

export const CounterBtnFunc = ({ initialValue = 0 }: CounterBtnProps): ReactNode => {
  const [counter, setCounter] = useState(initialValue);
  return (
    <button
      className={styles.btn}
      type='button'
      onClick={() => {
        setCounter(c => c + 1);
      }}
    >
      {counter}
    </button>
  );
};

type CounterBtnClassState = { counter: number };

export class CounterBtnClass extends Component<CounterBtnProps> {
  public state: CounterBtnClassState = {
    counter: this.props.initialValue ?? 0,
  };
  public render(): ReactNode {
    return (
      <button
        className={styles.btn}
        type='button'
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
        }}
      >
        {this.state.counter}
      </button>
    );
  }
}
