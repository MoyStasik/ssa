import styles from './button.module.css';

import { Props } from './button.types'

export default function Button({ children, handler }: Props) {
  return (
    <button
      className={styles.Button}
      onClick={handler}
    >
      {children}
    </button>
  );
}
