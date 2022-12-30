import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [levelOne, setLevelOne] = useState(false);
  const [levelTwo, setLevelTwo] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const response = await data.json();
      let results = response.results;

      setCharacters((prevChars) => {
        const initialCharacters = results
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
          .splice(0, `${levelOne ? 6 : levelTwo ? 8 : 4}`);
        const firstRoundCharacters = initialCharacters.map((item) => ({
          ...item,
          isSelected: false,
        }));

        return firstRoundCharacters;
      });
    })();
  }, [levelOne, levelTwo]);

  const selectCharacter = (character) => {
    setCharacters((prevChars) =>
      prevChars.map((char) => {
        if (char.id === character.id) {
          return { ...char, isSelected: true };
        } else {
          return char;
        }
      })
    );
  };

  const trackScore = (character) => {
    if (!character.isSelected) {
      setScore((prevScore) => prevScore + 1);
    } else if (character.isSelected) {
      console.log('game over');

      setScore(0);
      setLevelOne(false);
      setLevelTwo(false);
      setCharacters((prevChars) =>
        prevChars.map((char) => {
          return { ...char, isSelected: false };
        })
      );

      console.log(characters);
    }
  };

  useEffect(() => {
    if (score === 4) {
      setLevelOne(true);
      setScore(0);
    } else if (score === 6) {
      setLevelOne(false);
      setLevelTwo(true);
      setScore(0);
    }
  }, [score]);

  const randomnize = () => {
    setCharacters((prevChars) =>
      prevChars
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  const play = (character) => {
    selectCharacter(character);
    randomnize();
    trackScore(character);
  };

  const characterElements = characters.map((character) => (
    <Card
      key={uuidv4()}
      id={character.id}
      src={character.image}
      play={() => play(character)}
    />
  ));

  return (
    <AppStyled className='App'>
      <Header score={score} />
      <Board>{characterElements}</Board>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  gap: 20px;
  width: 100%;
  justify-content: center;

  @media (max-width: 580px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 16px;
    padding: 24px 16px;
  }
`;

export default App;
