"use strict";

function Cards({ card1, card2 }) {
  return (
    <div>
      <div>
        <img src={card1.image} alt=""></img>
      </div>
      <div>
        <img src={card2.image} alt=""></img>
      </div>
      <p>Score: {card1.value + card2.value}</p>
      <p>{card1.value + card2.value === 21 ? "BLACKJACK" : ""}</p>
    </div>
  );
}

export default Cards;
