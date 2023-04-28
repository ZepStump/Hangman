import React from "react";
import { useState, useEffect } from 'react';
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
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const c = (username) => {
    // initialize the gameWon variable
    var gameWon = "Lost";
    var gameWin = 0;

    // check if the game is won
    if (gameWon === "Won!") {
      // set the gameWin variable to 1
      gameWin = 1;
    } 
    // if username is in the db, add score, wins
    // alert(username + "'s score is " + score); 
    alert(gameWin)

    // if not, update the score,wins
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    c(username);
   
  };
  // calc score
  const score = gameWon
    ? (lettersGuessed + lives) * difficultyMultiplier() * 2
    : lettersGuessed + difficultyMultiplier();

  return (
    <div className="result">
      <div className="result__container">
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

       

        <div>

          <input type="text\" placeholder="Your name" value={username} onChange={handleUsernameChange} />

        <button type="submit" onClick={handleSubmit} >Submit </button>
        

    </div>
    <button className="play-btn" type="button" onClick={() => handlePlay()}>
          Play again
        </button> 
       
      </div>
    </div>
  );
}
