// import { useState, useEffect } from 'react';
import React from 'react';
import flower from './Images/Flower.png';
import sun from './Images/Sun.png';
import './GamePage.css';
import LeaderboardModal from "./LeaderboardModal";
import { useState } from 'react';
import SettingsModal from './SettingModal';

/*const runExampleRequest = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
}*/

var visible = true;
var season = 0;
var score = 0;

function RenderSpring() {
  if (visible) {
    return (
      <div className="Spring">
        <div className="GameLogo">
          <img src={flower} className="Game-logo" alt="flower" width="42%" height="42%" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Spring">
      </div>
    );
  }
}

function RenderSummer() {
  if (visible) {
    return (
      <div className="Summer">
        <div className="GameLogo">
          <img src={sun} className="Game-logo" alt="sun" width="42%" height="42%" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Summer">
      </div>
    );
  }
}

/*function RenderFall()
{
  if(visible)
  {
    return (
      <div className="fall">
        <div className="GameLogo">
          <img src={ghost} className="Game-logo" alt="ghost" width="42%" height="42%"/>;
        </div>
      </div>
    )
  } else
  {
    return (
      <div className="fall">
      </div>
    )
  }
}*/

/*function RenderWinter()
{
  if(visible)
  {
    return (
      <div className="spring">
        <img src={mcAlpin} className="Game-logo" alt="mcAlpin" width="42%" height="42%"/>;
      </div>
    )
  } else
  {
    return (
      <div className="spring">
      </div>
    )
  }
}*/

function RenderSeason({ curSeason, curScore }) {
  if (curSeason === 0) {
    return <RenderSpring />
  } else if (curSeason === 1) {
    return <RenderSummer />
  } else if (curSeason === 2) {
    return <RenderSpring />
    //return <RenderFall />;
  } else {
    return <RenderSpring />
    //return <RenderWinter />;
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

  return (
    <div className="GamePage">
      <header className="Game-header">
        <div className="Game-info">
          <div className="Game-info-object">
            <h1>Group 8</h1>
          </div>
          <div className="Game-info-object">
            <h2>High Score</h2> <br></br>
            <p placeholder="00000000"></p>
          </div>
          <div className="Game-info-object">
            <button className="openModalBtn" onClick={() => { setOpenSettingModal(true); visible = false; }}>Settings</button>
            {openSettingModal && <SettingsModal closeModal={setOpenSettingModal} />}
            <button className="openModalBtn" onClick={() => { setOpenLeaderboardModal(true); visible = false; }}>Leaderboard</button>
            {openLeaderboardModal && <LeaderboardModal closeModal={setOpenLeaderboardModal} />}
          </div>
        </div>
        <div>
          <RenderSeason curSeason={season} curScore={score} />
        </div>
      </header>
    </div>
  );
}

export default GamePage;
