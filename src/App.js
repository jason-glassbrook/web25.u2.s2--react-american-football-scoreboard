//TODO: STEP 1 - Import the useState hook.
import React , {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  /***********************************************************
    STATE
  ***********************************************************/
  const initScore = 0;

  /// apparently I can't do this... ///
  // const teams = [
  //   {
  //     "name"     : "Lions",
  //     "role"     : "home",
  //     "score"    : 0,
  //     "setScore" : () => {},
  //   },
  //   {
  //     "name"     : "Tigers",
  //     "role"     : "away",
  //     "score"    : 0,
  //     "setScore" : () => {},
  //   }
  // ];
  // const homeTeam = teams.indexOf ((team) => (team.role === "home"));
  // const awayTeam = teams.indexOf ((team) => (team.role === "away"));
  
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const homeName = "Lions";
  const [homeScore , setHomeScore] = useState (initScore);
  const awayName = "Tigers";
  const [awayScore , setAwayScore] = useState (initScore);

  /// apparently I can't do this... ///
  // [teams[homeTeam].score , teams[homeTeam].setScore] = useState (initScore);
  // [teams[awayTeam].score , teams[awayTeam].setScore] = useState (initScore);

  /***********************************************************
    EVENTS
  ***********************************************************/
  const points = {
    "touchdown" : 7,
    "fieldGoal" : 3,
  };

  const updateScore = (teamRole , scoreType) => {
    let message = "";
    let setter = () => {};
    ///
    switch (teamRole) {
      case "home":
        message = "--- 📣 --- home team scores --- 📣 ---";
        setter = setHomeScore;
        break;
      case "away":
        message = "--- 📣 --- away team scores --- 📣 ---";
        setter = setAwayScore;
        break;
      default:
        message = "--- 😨 --- uh-oh --- 😨 ---";
    }
    ///
    return (
      () => {
        console.log (message);
        setter ((score) => (score + points[scoreType]))
      }
    );
  };

  /***********************************************************
    COMPONENT
  ***********************************************************/
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={updateScore ("home" , "touchdown")}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={updateScore ("home" , "fieldGoal")}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={updateScore ("away" , "touchdown")}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={updateScore ("away" , "fieldGoal")}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
