




import { useState, useEffect } from 'react';

function Leaderboard() {
  const [users, setUsers] = useState({});
  const [numEntities, setNumEntities] = useState(10);

  useEffect(() => {
    setUsers({
      user1: { score: 100, wins: 10 },
      user2: { score: 95, wins: 8 },
      user3: { score: 80, wins: 5 },
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

  const sortedUsers = Object.entries(users)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, numEntities);

  return (
    <div className="leaderboard-container">
            <style>
  @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
</style>
      <h1 className='leaderboard-title'>Leaderboard</h1>
      <div className="select-container">
        <label className='leaderboard-entity' htmlFor="num-entities">Entities:</label>
        <select
          id="num-entities"
          value={numEntities}
          onChange={(e) => setNumEntities(parseInt(e.target.value))}
        >
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
