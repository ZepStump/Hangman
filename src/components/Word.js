import React from "react";

// displays current game word state
export default function Word({ gameWord, guessedLetters }) {
  const gameWordList = [...gameWord];
  const gameStateList = gameWordList.map((letter) =>
    guessedLetters[letter] ? letter : "_"
  );
  console.log(gameStateList.join(" "));
  return <div className="word">Game word: {gameStateList.join(" ")}</div>;
}
