import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import styles from './App.module.scss';

type JokeType = {
  setup: string;
  delivery: string;
};

const App = () => {
  const [joke, setJoke] = useState<JokeType | string>('');
  const [inputValue, setInputValue] = useState<string>();
  const [terminalInstructions, setTerminalInstructions] = useState<string>(
    'To get a new joke run $ npm run joke in your terminal',
  );

  const generateJoke = () => {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=twopart')
      .then((response) => response.json())
      .then((jokes) =>
        setJoke({
          setup: jokes.setup,
          delivery: jokes.delivery,
        }),
      );
  };

  const npm = '$ npm run joke';

  const copyInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInputValue(target.value);
  };

  const runJokeCommand = (e: { key: string }) => {
    if (inputValue === 'npm run joke') {
      if (e.key === 'Enter') {
        generateJoke();
        setInputValue('');
        setTerminalInstructions(
          `To get a new joke type ${npm} in your terminal`,
        );
      }
    } else if (e.key === 'Enter' && inputValue !== '') {
      setTerminalInstructions(
        `${inputValue}: command not found ${terminalInstructions}`,
      );
      setInputValue('');
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className={styles.container}>
      <Card joke={joke!} />
      <div className={styles.terminalText}>
        <span className={styles.user}>user:~$ </span>
        {terminalInstructions}
      </div>
      <Button
        runJokeCommand={runJokeCommand}
        copyInputValue={copyInputValue}
        generateJoke={generateJoke}
      />
    </div>
  );
};
export default App;
