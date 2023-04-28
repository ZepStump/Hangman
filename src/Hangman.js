import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { difficulties, randomWord } from "./RandomWord";
import Header from "./components/Header";
import Visual from "./components/Graphic";
import Word from "./components/Word";
import Letters from "./components/Letters";
// import Leaderboard from "./components/Leaderboard";
import CustomGame from "./components/CustomGame";
import GuessedLetters from "./components/GuessedLetters";
import Result from "./components/Result";

import lives0 from "./images/6-lives.png";
import lives1 from "./images/5-lives.png";
import lives2 from "./images/4-lives.png";
import lives3 from "./images/3-lives.png";
import lives4 from "./images/2-lives.png";
import lives5 from "./images/1-lives.png";
import lives6 from "./images/0-lives.png";

export default function Hangman() {
  // player name
  const [player, setPlayer] = useState(null);
  // current active game word
  const [gameWord, setGameWord] = useState(null);
  // array of guessed letters
  const [guessedLetters, setGuessedLetters] = useState({});

  // Difficulty of the words
  const [difficulty, setDifficulty] = useState("Easy");

  // Changing the difficulty
  const changeDifficulty = () =>
    setDifficulty(
      difficulties[
        difficulty === "Quotes" ? 0 : difficulties.indexOf(difficulty) + 1
      ]
    );

  // Getting and Setting images
  const [image, setImage] = useState(0);

  // Diplaying tries remaining
  const displayLives = [lives0, lives1, lives2, lives3, lives4, lives5, lives6];

  // get custom word if exists
  const { customWord } = useParams();
  console.log(customWord);
  // console.log(`encodeUri: ${encodeURI(customWord)}`);

  // encode string
  const encodedWord = new TextEncoder().encode(customWord);
  console.log(`encoded: ${encodedWord}`);
  console.log(encodedWord);

  // decode utf8 url param
  const decodeParam = (encodedString) => {
    const encodedArray = new Uint8Array(encodedString.split(","));
    const decodedString = new TextDecoder().decode(encodedArray);

    return decodedString;
  };

  //   init game word
  useEffect(() => {
    console.log("Checking for url param");
    console.log(`URL param: ${customWord}`);
    console.log("Setting gameword to hangman");
    customWord
      ? setGameWord({ category: "Custom", word: decodeParam(customWord) })
      : setGameWord({ category: "Testing", word: randomWord(difficulty) });
    setImage(0);
  }, []);

  //   update lives on guessedletters update
  const lives = useMemo(() => {
    // decrement lives if letter not in word
    const livesRemaining = Object.values(guessedLetters).reduce(
      (previousValue, currentValue) =>
        currentValue ? previousValue : previousValue - 1,
      6
    );
    setImage(6 - livesRemaining);

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
      <Header player={player} setPlayer={setPlayer} />
      <Visual image={image} setImage={setImage} />
      <center>
        <button
          className="custom-game-form__btn"
          onClick={() => {
            changeDifficulty();
            setGuessedLetters({});
            setGameWord({
              category: "Testing",
              word: randomWord(
                difficulties[
                  difficulties.indexOf(difficulty) === 3
                    ? 0
                    : difficulties.indexOf(difficulty) + 1
                ]
              ),
            });
          }}
        >
          Difficulty: {difficulty}
        </button>
      </center>
      <center>
        {gameWord && (
          <Word gameWord={gameWord} guessedLetters={guessedLetters} />
        )}
        <p>{lives}</p>
        <img
          className="Hangman-lives"
          alt="Lives Remaining"
          src={displayLives[image]}
        />
        <p>{gameWon}</p>
        <GuessedLetters guessedLetters={guessedLetters} />
      </center>
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
      {gameWon | (lives === 0) && (
        <Result
          gameWord={gameWord}
          setGameWord={setGameWord}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          gameWon={gameWon}
          lives={lives}
          difficulty={difficulty}
        />
      )}
    </>
  );
}
