import { useState, useEffect } from 'react';

function Leaderboard() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    setUsers({
      user1: { score: 100, wins: 10 },
      user2: { score: 95, wins: 8 },
      user3: { score: 80, wins: 5 },
      user4: { score: 75, wins: 3 }
    });
  }, []);

  const sortedUsers = Object.entries(users).sort((a, b) => b[1].score - a[1].score);

  return (
    <div className="leaderboard-container">
      <h1 className='leaderboard-title'>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(([username, { score, wins }]) => (
            <tr key={username}>
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
