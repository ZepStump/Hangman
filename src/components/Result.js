import React from "react";
import { randomWord } from "../RandomWord";

export default function Result({
  gameWord,
  setGameWord,
  guessedLetters,
  setGuessedLetters,
  gameWon,
  lives,
  difficulty,
}) {
  // get new word and reset game
  const handlePlay = () => {
    setGameWord({ category: "Testing", word: randomWord(difficulty) });
    setGuessedLetters({});
  };

  // calc letters guessed correctly
  const lettersGuessed = Object.values(guessedLetters).reduce(
    (previousValue, currentValue) =>
      currentValue ? previousValue + 1 : previousValue,
    0
  );

  // calc score
  const score = gameWon ? (lettersGuessed + lives) * 2 : lettersGuessed;

  return (
    <div className="result">
      <div className="result__container">
        <h2>You {gameWon ? "Won!" : "Lost."}</h2>
        <div>
          <p>Word: {gameWord.word}</p>
          <p>Letters Guessed: {lettersGuessed}</p>
          <p>Extra Lives: {lives}</p>
          <p>Win multiplier: {gameWon ? "2x" : "0x"}</p>
          <p>Final Score: {score}</p>
        </div>

        <button className="play-btn" type="button" onClick={() => handlePlay()}>
          Play again
        </button>
      </div>
    </div>
  );
}
