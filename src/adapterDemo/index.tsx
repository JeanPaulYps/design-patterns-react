import React, { useEffect, useState } from "react";
import CharactersCard from "./components/CharactersCard";
import { charactersAdapter } from "./conversions/characters";
import { Character } from "./interfaces/characters";
import { ConvertedCharacters } from "./interfaces/ConvertedCharacters";
import classes from "./styles.module.css";

function AdapterDemo(): JSX.Element {
  const [characters, setCharacters] = useState<ConvertedCharacters[]>([]);
  useEffect(() => {
    const getData = async () => {
      const characterResponse = (await fetch(
        "https://rickandmortyapi.com/api/character/"
      ).then((response) => response.json())) as Character;

      const charactersData = characterResponse.results.map((character) =>
        charactersAdapter.convertRequestToApp(character)
      ) as ConvertedCharacters[];

      console.log(characterResponse);
      console.log(charactersData);
      setCharacters(charactersData);
    };
    getData();
  }, []);
  return (
    <div className={classes["charactersContainer"]}>
      {characters.map(({ id, ...props }) => (
        <CharactersCard key={id} {...props} />
      ))}
    </div>
  );
}

export default AdapterDemo;
