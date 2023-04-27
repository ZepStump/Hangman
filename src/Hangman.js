import { useState, useEffect } from "react";
import { randomWord } from "./RandomWord";
import Header from "./components/Header";
import Visual from "./components/Graphic";
import Word from "./components/Word";
import Letters from "./components/Letters";
// import Leaderboard from "./components/Leaderboard";
import CustomGame from "./components/CustomGame";
import GuessedLetters from "./components/GuessedLetters";

export default function Hangman() {
  // current active game word
  const [gameWord, setGameWord] = useState(null);
  // array of guessed letters
  const [guessedLetters, setGuessedLetters] = useState({});
  //   track number of wrong guesses
  const [wrongGuesses, setWrongGuesses] = useState(0);

  //   init game word
  useEffect(() => {
    console.log("Setting gameword to hangman");
    setGameWord(randomWord());
  }, []);

  return (
    <>
      <Header />
      <Visual />
      {gameWord && <Word gameWord={gameWord} guessedLetters={guessedLetters} />}
      <GuessedLetters guessedLetters={guessedLetters} />
      <Letters
        gameWord={gameWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
      <div className="homepage-btn">
        <div className="btn-wrapper">
          <div className="btn-wrapper__container">
            <div className="btn-inner">
              <a className="btn-inner__text" href="/leaderboard">
                Leaderboard
              </a>
            </div>
          </div>
        </div>
      </div>

      <CustomGame />
    </>
  );
}
