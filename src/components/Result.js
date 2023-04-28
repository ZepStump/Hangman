import { useEffect, useState } from "react";
import { randomWord } from "../RandomWord";
import { db } from "../firebase-setup/firebase"

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
  allPlayers,
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


  useEffect(() => {
    console.log(allPlayers)
    if (allPlayers != null) { 
    if (score > 0) {
      var won = 0
      if (gameWon) {
        won = 1
      }

      //Get the scores for the user
      if (player != "") {
        var currScore = 0
        var currWins = 0
        console.log(allPlayers)
        for (let i = 0; i < allPlayers.length; i++) {
          console.log(allPlayers)
          if (allPlayers[i].name == player) {
            currScore = allPlayers[i].score
            currWins = allPlayers[i].wins
          }
        }

        db
          .collection("users")
          .doc(player)
          .set({
            score: score + currScore,
            wins: won + currWins
          });
      }
      }
    }
  }, [score]);

  // handle add score with new player name
  const handleAddScore = () => {
    setIsPlayer(true);
  };

  return (
    <div className="result">
      <div className="result__container">
        {!isPlayer && (
          <div>
            <h3>Please enter a name to add your results to the leaderboard!</h3>
            <input
              className="player__input"
              type="text"
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
            />
            <button
              className="result__add-btn"
              type="button"
              onClick={handleAddScore}
            >
              Add score
            </button>
          </div>
        )}
        <h2>You {gameWon ? "Won!" : "Lost."}</h2>
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

        <button className="play-btn" type="button" onClick={() => handlePlay()}>
          Play again
        </button>
      </div>
    </div>
  );
}
