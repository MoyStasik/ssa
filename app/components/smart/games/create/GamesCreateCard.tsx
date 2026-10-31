'use client';

import styles from './style.module.css';

import Button from '@/app/components/core/button/button';
import Card from '@/app/components/core/card/card';
import { useState } from 'react';

export default function CreateCard() {
  const [gameName, setGameName] = useState('');

  return (
    <Card>
      <div
        className={styles.Header}
      >
        <span>
          Шаг 01
        </span>
        <h2
          className={styles.Title}
        >
          Создай игровое пространство
        </h2>
        <span
          className={styles.Description}
        >
          Выбери название, иконку и добавь всех участников вашей компании.
        </span>
      </div>
      <span>
        Иконка игры
      </span>
      <div>Иконки</div>
      <div
        className={styles.GameWrapper}
      >
        <span>Название игры</span>
        <input
          type='text'
          placeholder='Например: Мафия, Монополия...'
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className={styles.Input}
        />
      </div>
      <div
        className={styles.Friends}
      >
        <span>Пригласить друзей</span>
      </div>
      <div>
        <Button>
          Отмена
        </Button>
      </div>
    </Card>
  );
}
