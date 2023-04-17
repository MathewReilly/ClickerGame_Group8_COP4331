import React from 'react' 
import "./LeaderboardModal.css"

function LeaderboardModal({closeModal}){
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  closeModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Leaderboard</h1>
            </div>
            <div className="body">
                
            </div>
          </div>
        </div>
      );
    }

export default LeaderboardModal; 