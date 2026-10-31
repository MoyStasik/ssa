import { Props } from './card.types';
import styles from './card.module.css'

export default function Card({ children }: Props) {


  return (
    <div
      className={styles.Card}
    >
      { children }
    </div>
  );
}
