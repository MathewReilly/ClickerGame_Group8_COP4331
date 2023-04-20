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


const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
);

var score = parseInt(getCookieValue("currScore"));
var season = 0;
var nickname = getCookieValue("nickname");


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


/*function RenderSeason({ curSeason }) {
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
}*/

function RenderSeason({ curSeason, count_temp, incrementCount_temp }) {
  season = (Math.floor((score + 1) / 250)) % 4;
  if (curSeason === 0) {
    return (
      <div className="Spring">
        <button type="submit" className="Game-Button" onClick={incrementCount_temp}>
          <RenderSpring />
        </button>
      </div>
    )
  } else if (curSeason === 1) {
    return (
      <div className="Summer">
        <button type="submit" className="Game-Button" onClick={incrementCount_temp}>
          <RenderSummer />
        </button>
      </div>
    )
  } else if (curSeason === 2) {
    return (
      <div className="Fall">
        <button type="submit" className="Game-Button" onClick={incrementCount_temp}>
          <RenderFall />
        </button>
      </div>
    )
  } else if (curSeason === 3) {
    return (
      <div className="Winter">
        <button type="submit" className="Game-Button" onClick={incrementCount_temp}>
          <RenderWinter curSeason={season} />
        </button>
      </div>
    )
  } else {
    return (
      <div className="Spring">
        <button type="submit" className="Game-Button" onClick={incrementCount_temp}>
          <RenderSpring />
        </button>
      </div>
    )
  }
}

const GamePage = () => {


  // const [responseData, setResponseData] = useState(undefined);

  /*useEffect(() => {
    runExampleRequest()
      .then(response => setResponseData(response.express))
      .catch(err => console.log(err));

  }, [])*/

  score = parseInt(getCookieValue("currScore"));

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openLeaderboardModal, setOpenLeaderboardModal] = useState(false);
  const [count, setCount] = useState(score);
  const incrementCount = (count) => {
    // Update state with incremented value
    score = (score + 8);
    setCount(score);
  };


  function updateScore() {
    fetch('http://localhost:5001/updateScore', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname,
        score,
      }),
    });
  }


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
            <div id="score"> {count} </div>
            <div> </div> <div> </div> <div></div>
          </div>
          <div className="Game-button-object">
            <div></div><div></div><div></div><div></div>
            <button className="Submit-Button" type="submit" onClick={updateScore}>
              SAVE
            </button>
            <div> </div>
            <button className="Modal-Button" onClick={() => { setOpenSettingModal(true); }}>
              <img src={settings} className="Modal-Image" alt="settingbutton" border="0" />
            </button>
            {openSettingModal && <SettingsModal closeModal={setOpenSettingModal} />}
            <div> </div>
            <button className="Modal-Button" onClick={() => { setOpenLeaderboardModal(true); }}>
              <img src={leaderboard} className="Modal-Image" alt="leaderboardbutton" border="0" />
            </button>
            {openLeaderboardModal && <LeaderboardModal closeModal={setOpenLeaderboardModal} />}
            <div></div><div></div><div></div>
          </div>
        </div>
        <div className="backgroundSpacing">
          <RenderSeason curSeason={season} count_temp={score} incrementCount_temp={incrementCount} />
        </div>
      </header>
    </div>
  );
}

export default GamePage;
