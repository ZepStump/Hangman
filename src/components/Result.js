import { useState } from "react";
import { randomWord } from "../RandomWord";

export default function Result({
  gameWord,
  setGameWord,
  guessedLetters,
  setGuessedLetters,
  gameWon,
  lives,
  difficulty,
  player,
  setPlayer,
}) {
  // has user entered name
  const [isPlayer, setIsPlayer] = useState(player.length > 0 ? true : false);

  // get new word and reset game
  const handlePlay = () => {
    setGameWord({ category: "Testing", word: randomWord(difficulty) });
    setGuessedLetters({});

    // change all color back for the key on the keyboard back
    const line1Els = document.querySelectorAll("span");
    line1Els.forEach((el) => {
      el.style.backgroundColor = "#10131c";
    });
  };

  // calc letters guessed correctly
  const lettersGuessed = Object.values(guessedLetters).reduce(
    (previousValue, currentValue) =>
      currentValue ? previousValue + 1 : previousValue,
    0
  );

  // difficulty multiplier
  const difficultyMultiplier = () => {
    switch (difficulty.toLowerCase) {
      case "easy": {
        return 1;
      }
      case "medium": {
        return 2;
      }
      case "hard": {
        return 3;
      }
      case "quotes": {
        return 5;
      }
      default: {
        return 1;
      }
    }
  };

  // calc score
  const score = gameWon
    ? (lettersGuessed + lives) * difficultyMultiplier() * 2
    : lettersGuessed * difficultyMultiplier();

  // handle add score with new player name
  const handleAddScore = () => {
    setIsPlayer(true);
  };

  return (
    <div className="result">
      <div className="result__container">
        {!isPlayer && (
          <div className="result__request-player">
            <h3>Please enter a name to add your results to the leaderboard!</h3>
            <input
              className="result__player-input"
              type="text"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
            />
            <button
              className="result__btn"
              type="button"
              onClick={handleAddScore}
            >
              Add score
            </button>
          </div>
        )}
        <h2 className="result__title">You {gameWon ? "Won!" : "Lost."}</h2>
        <div>
          <p>Word: {gameWord.word}</p>
          <p>Letters Guessed: {lettersGuessed}</p>
          <p>Extra Lives: {lives}</p>
          <p>Win multiplier: {gameWon ? "x2" : "none"}</p>
          <p>
            Difficulty multiplier: {difficulty} x{difficultyMultiplier()}
          </p>
          <p>Final Score: {score}</p>
        </div>

        <button
          className="result__btn"
          type="button"
          onClick={() => handlePlay()}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
