// import { useState, useEffect } from 'react';
import React from 'react';
import flower from './Images/Flower.png';
import sun from './Images/Sun.png';
import './GamePage.css';
import LeaderboardModal from "./LeaderboardModal";
import {useState} from 'react';
import SettingsModal from './SettingModal';

/*const runExampleRequest = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}*/

const GamePage = () => {

  // const [responseData, setResponseData] = useState(undefined);

  /*useEffect(() => {
    runExampleRequest()
      .then(response => setResponseData(response.express))
      .catch(err => console.log(err));

  }, [])*/

  /*
<img src={sun} className="App-logo" alt="flower" width="550" height="550"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          Test backend communication:
          <div>
            {responseData}
          </div>
        </div>
  */
  const[openSettingModal, setOpenSettingModal] = useState(false); 
  const[openLeaderboardModal, setOpenLeaderboardModal] = useState(false); 
  return (
    <div className="GamePage">
      <header className="Game-header">
        <div className="Game-info">
            <div className="Game-info-object">
                <h1>Group 8</h1> 
            </div>
            <div className="Game-info-object">
                <h2>High Score</h2> <br></br>
                <div id = "score"> 0 </div> 
            </div>
            <div className="Game-info-object">
              <button className="openModalBtn" onClick={() =>{setOpenSettingModal(true)}}>Settings</button>
                        { openSettingModal && <SettingsModal closeModal={setOpenSettingModal}/>}
                <button className="openModalBtn" onClick={() =>{setOpenLeaderboardModal(true)}}>Leaderboard</button>
                        { openLeaderboardModal && <LeaderboardModal closeModal={setOpenLeaderboardModal}/>} 
            </div>
        </div>
        <div className="Game-logo">
            <img src={sun} className="App-logo" alt="flower" width="50%" height="50%"/>
            <script>
                let counter = 0;
  
                document.getElementById('sun').onclick = () ={} {
                  counter = counter + 1};
                  document.getElementById('score').innerText = counter;
                ;
            </script>
        </div>
      </header>
    </div>
  );
}

export default GamePage;
