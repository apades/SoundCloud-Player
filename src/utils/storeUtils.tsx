import { observer } from 'mobx-react';
import { ReactElement } from 'react';

export function WithObserver<T = void>(props: {
  fn: (props: T) => ReactElement;
  props?: T;
}) {
  let El = observer(() => props.fn(props.props));
  return <El />;
}

export function withObserver<T = void>(
  fn: (props: T) => ReactElement,
  props?: T
) {
  let El = observer(() => fn(props));
  return <El />;
}
