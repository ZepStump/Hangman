import React from "react";
import { FaUser } from "react-icons/fa";

// provides header for page
export default function Header({
  player,
  setPlayer,
  setDisplayLeaderboard,
  setDisplayCustomGame,
}) {
  // control input
  const handleChange = (e) => setPlayer(e.target.value);
  // toggle leaderboard
  const toggleLeaderboard = () =>
    setDisplayLeaderboard((previous) => !previous);
  // toggle custom game
  const toggleCustomGame = () => setDisplayCustomGame((previous) => !previous);

  return (
    <header className="header">
      <h1 className="header__title">Welcome to Hangman!</h1>

      <button className="header__btn" type="button" onClick={toggleLeaderboard}>
        Leaderboard
      </button>
      <button className="header__btn" type="button" onClick={toggleCustomGame}>
        Custom Word
      </button>
      <div className="header__player">
        <FaUser />
        <input
          className="player__input"
          type="text"
          value={player}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </header>
  );
}
