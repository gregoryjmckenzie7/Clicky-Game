import React from "react";
import "./GameCards.css";

const GameCard = props => (
        <div onClick={() => props.isClicked(props.id)} className="click-item shake" role="img" aria-label="click item">
            <img className="player-cards" alt={props.name} src={props.image} />
        </div>
);

export default GameCard;
