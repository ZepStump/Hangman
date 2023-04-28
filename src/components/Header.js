import React from "react";
import { FaUser } from "react-icons/fa";

// provides header for page
export default function Header({ player, setPlayer }) {
  // control input
  const handleChange = (e) => setPlayer(e.target.value);

  return (
    <header className="header">
      <h1 className="header__title">Welcome to Hangman!</h1>
      {/* <div className="header__player">
        <input
          className="player__input"
          type="text"
          value={player}
          onChange={(e) => handleChange(e)}
        />
        <FaUser />
      </div> */}
    </header>
  );
}
