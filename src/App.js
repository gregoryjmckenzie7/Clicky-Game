import React, { Component } from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import GameCard from "./components/GameCards";
import players from "./gameCards.json"
import './App.css';

class App extends Component {
  state = {
    players
  };

render() {
  return (
    <Wrapper>
      <Title><h1>NBA Clicky Game!</h1><h3>Click any image to start, but don't click on any more than once!</h3></Title>
      <main className="container">
      {this.state.players.map(player => (
        <GameCard
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
