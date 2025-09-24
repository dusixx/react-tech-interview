import type { PropsWithChildren, ReactNode } from 'react';
import { Children, Component } from 'react';

const DEF_NAME = 'anonymous';

type WelcomeProps = PropsWithChildren<{
  name?: string;
}>;

export class WelcomeClass extends Component<WelcomeProps> {
  public static defaultProps = {
    name: DEF_NAME,
  };
  public render(): ReactNode {
    const { name, children } = this.props;
    return (
      <div>
        Welcome, {name}
        <div>Children count: {Children.count(children)}</div>
      </div>
    );
  }
}

export function WelcomeFunc({ name = DEF_NAME, children }: WelcomeProps): ReactNode {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      Welcome, {name}
      <div>{Children.toArray(children)}</div>
    </div>
  );
}
