




import { useState, useEffect } from 'react';

function Leaderboard() {
  const [users, setUsers] = useState({});
  const [numEntities, setNumEntities] = useState(10);

  useEffect(() => {
    setUsers({
      user1: { score: 100, wins: 10 },
      user2: { score: 95, wins: 8 },
      user3: { score: 200, wins: 5 },
      user4: { score: 75, wins: 3 },
      user5: { score: 70, wins: 2 },
      user6: { score: 65, wins: 1 },
      user7: { score: 60, wins: 0 },
      user8: { score: 55, wins: 0 },
      user9: { score: 50, wins: 0 },
      user10: { score: 45, wins: 0 },
      user11: { score: 40, wins: 0 },
      user12: { score: 35, wins: 0 },
      user13: { score: 30, wins: 0 },
      user14: { score: 25, wins: 0 },
      user15: { score: 20, wins: 0 }
    });
  }, []);

  // sort by score
  const sortedUsers = Object.entries(users)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, numEntities);

  return (
    <div className="leaderboard-container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
        {`
  body{
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2392a8ac' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
    font-family: 'Roboto', sans-serif;
  }
  `}
      </style>
      <h1 className='leaderboard-title'>Leaderboard</h1>
      <div className="select-container">
        <label className='leaderboard-entity' htmlFor="num-entities">Entities:</label>
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
          {sortedUsers.map(([username, { score, wins }], index) => (
            <tr
              key={username}
              className={index < 3 ? `top-${index + 1}` : ''}
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
  );
}

export default Leaderboard;
