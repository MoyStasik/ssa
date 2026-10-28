import { Props } from './button.types'

export default function Button({ children, handler }: Props) {
  return (
    <button
      onClick={handler}
    >
      {children}
    </button>
  );
}
