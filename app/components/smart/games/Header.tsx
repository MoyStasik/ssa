import ButtonCreate from './ButtonCreate';
import './Header.css';

export default function Header() {
  return (
    <div
      className='Header'
    >
      <div
        className='DescriptionWrapper'
      >
        <span>
          GAMETRACK
        </span>
        <h1
          className='Title'
        >
          Мои игры
        </h1>
        <span
          className='Description'
        >
          Отслеживай, кто побеждает чаще всех
        </span>
      </div>
      <div
        className='ButtonWrapper'
      >
        <ButtonCreate
        >
          + Новая игра
        </ButtonCreate>
      </div>
    </div>
  )
}
