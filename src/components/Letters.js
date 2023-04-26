import React from "react";
const line1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O'];
const line2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const line3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

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
   <div>
     <style>
        @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
        {`
          body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 97vh;
            background: #00BCD4;
          }
          `}
      </style>
   
    <div className="letters">
      <div class="base">

      <div class="line1">
      {line1.map((letter) => (
        <span onClick={() => handleClick(letter.toLowerCase())}>{letter}</span>
      ))}
    </div>

    <div class="line2">
      {line2.map((letter) => (
        <span onClick={() => handleClick(letter.toLowerCase())}>{letter}</span>
      ))}
    </div>

    <div class="line3">
      {line3.map((letter) => (
        <span onClick={() => handleClick(letter.toLowerCase())}>{letter}</span>
      ))}
    </div>

      </div>
    </div>
    </div>
  );
}
