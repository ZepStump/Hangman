import React, { useState } from "react";

// form to create custom game
export default function CustomGame() {
  // custom word controlled input
  const [customWord, setCustomWord] = useState("");

  // handle user input change
  const handleChange = (e) => {
    setCustomWord(e.target.value);
  };

  // handle user submitting custom game
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Custom game word: ${customWord}`);

    // encode string
    const encodedCustomWord = new TextEncoder().encode(customWord);
    console.log(`encoded custom word: ${encodedCustomWord}`);
    console.log(encodedCustomWord);

    alert(
      `Custom game word: ${customWord} Link: http://localhost:3000/Hangman/${encodedCustomWord}`
    );
  };
  return (
    <form
      className="custom-game-form"
      id="customGame"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="custom-game-form__label">
        Custom game:
        <input
          className="custom-gmae-form__input"
          type="text"
          value={customWord}
          onChange={(e) => handleChange(e)}
          placeholder="Customize word.."
        ></input>
      </label>

      <button
        className="custom-game-form__btn"
        type="submit"
        htmlFor="custom-game-form"
      >
        Get Link
      </button>
    </form>
  );
}
