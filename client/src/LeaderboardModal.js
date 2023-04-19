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
                <table>
                    <tr>
                      <th>Username</th>
                      <th>Score</th>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    <tr> 
                    <td> PlaceHolder  </td> <td>  1</td>
                    </tr>
                    
                </table>
            </div>
          
        </div>
      );
    }

export default LeaderboardModal; 