import React from "react";

// displays previously guessed letters
export default function GuessedLetters({ guessedLetters }) {
  return (
    <div>
      {Object.keys(guessedLetters).length > 0
        ? Object.keys(guessedLetters).join(" ")
        : "Start guessing!"}
    </div>
  );
}
