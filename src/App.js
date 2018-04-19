import React, { Component } from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCards";
import NavBar from "./components/NavBar";
import players from "./gameCards.json";
import './App.css';

let score = 0;
let topScore = 0;
let userMessage = "Click an image to begin!";

class App extends Component {
  state = {
    players,
    score,
    topScore,
    userMessage
  };

  isClicked = id => {
    const players = this.state.players;
    const clickedPlayers = players.filter(player => player.id === id);

    if(clickedPlayers[0].clicked) {
      console.log("Score: " + score);
      console.log("Top Score: " + topScore);
      
      score = 0;
      userMessage = "Uh oh! You already clicked that player! Let's try this again!"

      for (let i = 0; i < players.length; i++) {
        players[i].clicked = false;
      }
      this.setState({userMessage});
      this.setState({score});
      this.setState({players});
    }else if(score < 11) {
      clickedPlayers[0].clicked = true;
      score++;
      userMessage = "Good Job! Keep on clicking new players to increase your score!";

      if(score > topScore) {
        topScore = score;
        this.setState({topScore});
      }
      players.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({players});
      this.setState({score});
      this.setState({userMessage});
    }else {
      clickedPlayers[0].clicked = true;
      score = 0;
      userMessage = "WoooHooo! You clicked all the players without repeating!!! Want to try again??";
      topScore = 12;
      this.setState({topScore});

      for (let i = 0; i < players.length; i++) {
        players[i].clicked = false;
      }
      players.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({players});
      this.setState({score});
      this.setState({userMessage});
    }
  };

render() {
  return (
    <Wrapper>
      <NavBar>
        <ul>
          <li>
            <a href="/">NBA Clicky Game</a>
          </li>
          <li>{this.state.userMessage}</li>
          <li>
            Score: {this.state.score}
            | Top Score: {this.state.topScore}
          </li>
        </ul>
      </NavBar>
      <Title><h1>NBA Clicky Game!</h1><h3>Click any image to start, but don't click on any more than once!</h3></Title>
      <main className="container">
      {this.state.players.map(player => (
        <GameCard
          isClicked={this.isClicked}
          id={player.id}
          key={player.id}
          image={player.image}
          />
      ))}
      </main>
    </Wrapper>
  );
}
}


export default App;
