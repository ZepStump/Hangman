import { useState, useEffect } from "react";

import Header from "./components/Header";
import Visual from "./components/Graphic";
import Word from "./components/Word";
import Letters from "./components/Letters";
import Leaderboard from "./components/Leaderboard";

export default function Hangman() {
  // current active game word
  const [gameWord, setGameWord] = useState();
  //   object of guessed letters format letter: true/false if in word
  const [guessedLetters, setGuessedLetters] = useState({});

  const testWords = ["test", "hangman"];

  //   init game word
  useEffect(() => {
    setGameWord(testWords[1]);
  }, []);

  return (
    <>
      <Header />
      <Visual />
      <Word gameWord={gameWord} guessedLetters={guessedLetters} />
      <Letters
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
      <Leaderboard />
    </>
  );
}
