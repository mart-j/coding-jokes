import React, { FC } from 'react';
import styles from './Button.module.scss';

interface Props {
  generateJoke: () => void;
  copyInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  runJokeCommand: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Button: FC<Props> = ({
  generateJoke,
  copyInputValue,
  runJokeCommand,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // @ts-ignore
        e.target.reset();
      }}
      className={styles.form}
    >
      {' '}
      <div className={styles.input}>
        <div><span className={styles.user}>user:~$ </span></div>
        <input
          className={styles.inputField}
          onKeyPress={runJokeCommand}
          onChange={copyInputValue}
          type="text"
        />
      </div>
    </form>
  );
};

export default Button;
