// import { useState, useEffect } from 'react';
import React from 'react';
import flower from './Images/Flower.png';
import sun from './Images/Sun.png';
import lantern from './Images/JackOLantern.png';
import mcAlpin from './Images/McAlpin.png';
import './GamePage.css';
import LeaderboardModal from "./LeaderboardModal";
import { useState } from 'react';
import SettingsModal from './SettingModal';
import leaderboard from "./Images/Leaderboard.png";
import settings from "./Images/Settings.png";
//import RenderSeason from './Seasons';

/*const runExampleRequest = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}*/


var season = 0;
var score = 0;

function RenderSpring() {

  return (
    <img src={flower} className="Game-logo" alt="buttonpng" border="0" />
  );
}

function RenderSummer() {
  return (
    <img src={sun} className="Game-logo" alt="buttonpng" border="0" />
  );
}


function RenderFall() {
  return (
      <img src={lantern} className="Game-logo" alt="buttonpng" border="0" />
  )
}

function RenderWinter() {
  return (
          <img src={mcAlpin} className="Game-logo" alt="buttonpng" border="0" />
  )
}


function RenderSeason({ curSeason }) {
  season = (Math.floor(score / 20)) % 4;
  if (curSeason === 0) {
    return <RenderSpring />
  } else if (curSeason === 1) {
    return <RenderSummer />
  } else if (curSeason === 2) {
    return <RenderFall />
  } else if (curSeason === 3) {
    return <RenderWinter />
  } else {
    return <RenderSpring />
  }
}

const GamePage = () => {

  // const [responseData, setResponseData] = useState(undefined);

  /*useEffect(() => {
    runExampleRequest()
      .then(response => setResponseData(response.express))
      .catch(err => console.log(err));

  }, [])*/

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openLeaderboardModal, setOpenLeaderboardModal] = useState(false);
  const [count, setCount] = useState(score);
  const incrementCount = (count) => {
    // Update state with incremented value
    score = score + 1;
    setCount(score);
  };

  //
  return (
    <div className="GamePage">
      <header className="Game-header">
        <div className="Game-info">
          <div className="Game-info-object">
            <h1>Group 8</h1>
          </div>
          <div className="Game-info-object">
            <h2>High Score</h2>
            <div id="score"> {count - 1} </div>
          </div>
          <div className="Game-info-object">
            <button className="openModalBtn" onClick={() => { setOpenSettingModal(true); }}> <img src={settings} className="Modal-Button" alt="settingbutton" border="0" /> </button>
            {openSettingModal && <SettingsModal closeModal={setOpenSettingModal} />}

            <button className="openModalBtn" onClick={() => { setOpenLeaderboardModal(true); }}> <img src={leaderboard} className="Modal-Button" alt="leaderboardbutton" border="0" /> </button>
            {openLeaderboardModal && <LeaderboardModal closeModal={setOpenLeaderboardModal} />}
          </div>
        </div>
        <div>
          <button type="submit" className="Game-Button" onClick={incrementCount}>
            <RenderSeason curSeason={season} />
          </button>
        </div>
      </header>
    </div>
  );
}

export default GamePage;
