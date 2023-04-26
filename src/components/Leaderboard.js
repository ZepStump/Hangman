import React from "react";
import { useState, useEffect } from "react";
// leaderboard to show top players
// could be pop out, toggle to view, or scroll to view

function Leaderboard() {
  const [users, setUsers] = useState({});

  // Add some users to the state
  useEffect(() => {
    setUsers({
      user1: 10,
      user2: 95,
      user3: 80,
      user4: 75
    });
  }, []);

  // Sort the users by score in descending order
  const sortedUsers = Object.entries(users).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(([username, score]) => (
            <tr key={username}>
              <td>{username}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;