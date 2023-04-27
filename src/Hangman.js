import { useState, useEffect, useMemo } from "react";
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

  //   init game word
  useEffect(() => {
    console.log("Setting gameword to hangman");
    setGameWord(randomWord());
    setGameWord({ category: "Testing", word: "hangman" });
  }, []);

  //   update lives on guessedletters update
  const lives = useMemo(() => {
    // decrement lives if letter not in word
    const livesRemaining = Object.values(guessedLetters).reduce(
      (previousValue, currentValue) =>
        currentValue ? previousValue : previousValue - 1,
      5
    );

    return livesRemaining;
  }, [guessedLetters]);

  // check if game won on guessedletters update
  const gameWon = useMemo(() => {
    if (gameWord && guessedLetters) {
      const wordLetterList = [...gameWord.word.replaceAll(" ", "")];
      console.log(wordLetterList);
      const wonChecker = (guessed, word) =>
        word.every((letter) => guessed.includes(letter));

      return wonChecker(Object.keys(guessedLetters), wordLetterList);
    } else {
      return false;
    }
  }, [gameWord, guessedLetters]);

  return (
    <>
      <Header />
      <Visual />
      {gameWord && <Word gameWord={gameWord} guessedLetters={guessedLetters} />}
      <p>{lives}</p>
      <p>{gameWon}</p>
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
