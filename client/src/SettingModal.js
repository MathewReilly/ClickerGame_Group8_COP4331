import React from 'react' 
import "./SettingsModal.css"

function SettingsModal({closeModal}){
    return (
        <div className="modalBackgroundSettings">
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
              <h1>About</h1>
              <h2>Group 8 : Season Clicker</h2>
              <h3>Welcome to our Large Project</h3>
              <h4> How to Play! </h4>
              <p>Click the icon in the center of the screen to increase your score by 8!</p> 
              <p> You can save your score by pressing the Save button or by pressing the Logout button. </p> 
              <p> Keep pressing to experience the changing of seasons and more suprises! </p>
              <p> Press the Leaderboard button to display the Top 8 scores!</p>
            </div>
            <div className="body">
          
            </div>
          </div>
        </div>
      );
    }

export default SettingsModal; 