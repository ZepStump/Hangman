import { useState, useEffect } from "react";
import { randomWord } from "./RandomWord";
import Header from "./components/Header";
import Visual from "./components/Graphic";
import Word from "./components/Word";
import Letters from "./components/Letters";
import Leaderboard from "./components/Leaderboard";
import CustomGame from "./components/CustomGame";

export default function Hangman() {
  // current active game word
  const [gameWord, setGameWord] = useState(null);
  //   object of guessed letters format letter: true/false if in word
  const [guessedLetters, setGuessedLetters] = useState({});

  //   init game word
  useEffect(() => {
    console.log("Setting gameword to hangman");
    setGameWord("hangman");
  }, []);

  return (
    <>
      <Header />
      <Visual />
      {gameWord && <Word gameWord={gameWord} guessedLetters={guessedLetters} />}
      <Letters
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
      <Leaderboard />
      <CustomGame />
    </>
  );
}
