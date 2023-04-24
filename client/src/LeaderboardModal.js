
import "./LeaderboardModal.css"
import { useEffect, useState } from 'react';


function LeaderboardModal({closeModal}){

    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
    fetch('http://cop4331-23.com:5001/leaderboard')
      .then(response => response.json())
      .then(data => {
        setLeaderboardData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

    return (
        <div className="modalBackgroundLeaderboard">
          <div className="modalContainerLeaderboard">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div>
      <h1>Leaderboard:</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Nickname</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((data, index) => (
            <tr key={data._id}>
              <td>{index + 1}</td>
              <td>{data.nickname}</td>
              <td>{data.currScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
      );
    }

export default LeaderboardModal; 