import React, { useState } from "react";

// form to create custom game
export default function CustomGame({ setDisplayCustomGame }) {
  // custom word controlled input
  const [customWord, setCustomWord] = useState("");
  // encoded custom word
  const [encodedCustomWord, setEncodedCustomWord] = useState(null);

  // handle user input change
  const handleChange = (e) => {
    setCustomWord(e.target.value);
  };

  // handle user submitting custom game
  const handleSubmit = (e) => {
    e.preventDefault();

    // encode string
    setEncodedCustomWord(new TextEncoder().encode(customWord.toLowerCase()));
  };

  // handle close
  const handleClose = () => {
    setDisplayCustomGame(false);
  };

  return (
    <div className="result">
      <form
        className="custom-game-form"
        id="customGame"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="custom-game-form__title">
          Create a game with a custom word to challange your friends!
        </h2>
        <label className="custom-game-form__label">
          <input
            className="custom-game-form__input"
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
        {encodedCustomWord && (
          <a
            href={`#/${encodedCustomWord}`}
          >{`zepstump.github.io/Hangman/#/${encodedCustomWord}`}</a>
        )}
        <button className="result__btn" type="button" onClick={handleClose}>
          Close
        </button>
      </form>
    </div>
  );
}
