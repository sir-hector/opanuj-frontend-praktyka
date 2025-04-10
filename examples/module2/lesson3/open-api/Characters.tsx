import { DefaultApi } from './api';
import { useState, useEffect } from 'react';
import type { Character } from './api/models/Character';

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacters().then((response) => {
      console.log(response.results);
      setCharacters(response.results!);
    });
  }, []);

  return (
    <div>
      <h2>Character List</h2>
      {characters &&
        characters.map((character) => {
          return <div> {character.name}</div>;
        })}
    </div>
  );
};
