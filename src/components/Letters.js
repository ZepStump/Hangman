import React from "react";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// displays letter buttons for user to click and update with reseult (green/red)
export default function Letters({
  gameWord,
  guessedLetters,
  setGuessedLetters,
}) {
  // handle user clicking letter
  const handleClick = (letter) => {
    console.log(`Clicked: ${letter}`);
    const isCorrect = gameWord.includes(letter);
    console.log(isCorrect);
    setGuessedLetters({ ...guessedLetters, [letter]: isCorrect });
  };
  return (
    <div className="letters">
      {letters.map((letter) => (
        <button
          className="letters__btn"
          key={letter.toLowerCase()}
          onClick={() => handleClick(letter.toLowerCase())}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
