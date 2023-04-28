import { useState, useEffect } from "react";
import { db } from "../firebase-setup/firebase";

function Leaderboard({ setDisplayLeaderboard }) {
  const [users, setUsers] = useState({});
  const [numEntities, setNumEntities] = useState(10);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          username: doc.id,
          score: doc.data().score,
          wins: doc.data().wins,
        }))
      )
    );
  }, []);

  // sort by score
  const sortedUsers = Object.entries(users)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, numEntities);

  // handle close
  const handleClose = () => {
    setDisplayLeaderboard(false);
  };

  return (
    <div className="result">
      <div className="leaderboard-container">
        {/* removed styling from here */}
        <h1 className="leaderboard-title">Leaderboard</h1>
        <div className="select-container">
          <label className="leaderboard-entity" htmlFor="num-entities">
            Entities:
          </label>
          <select
            id="num-entities"
            value={numEntities}
            onChange={(e) => setNumEntities(parseInt(e.target.value))}
          >
            {/* only show 10 / 15 top players */}
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {/* Add some different styles to top-1, top-2, top-3 */}
            {sortedUsers.map(([id, { username, score, wins }], index) => (
              <tr
                key={username}
                className={index < 3 ? `top-${index + 1}` : ""}
              >
                <td>{index + 1}</td>
                <td>{username}</td>
                <td>{score}</td>
                <td>{wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="leaderboard-btn" type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default Leaderboard;

// this was previous styling

/* <style>
        @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
        {`
          body{
            background-color: #10131c;
            background-size: cover;
            background-image: url('https://cdn.vectorstock.com/i/1000x1000/49/68/black-and-blue-background-design-template-vector-37054968.webp');
            font-family: 'Roboto', sans-serif;
          }
          `}
      </style> */
