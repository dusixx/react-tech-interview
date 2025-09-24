import { sleep } from '@common/utils.ts';
import { useState, type ReactNode } from 'react';

export function DelayedCounter(): ReactNode {
  const [count, setCount] = useState(0);

  const increment = async (): Promise<void> => {
    await sleep(500);
    console.debug('count=', 1);
    setCount(c => c + 1);
  };
  return <button onClick={() => void increment()}>{count}</button>;
}
