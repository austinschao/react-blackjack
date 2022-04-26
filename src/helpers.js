"use strict";
import axios from "axios";

async function draw2Cards() {
  const resp = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
  );
  const faceCards = ["KING", "QUEEN", "JACK"];

  const card1 = resp.data.cards[0];
  const card2 = resp.data.cards[1];

  // converts card1 values
  if (faceCards.includes(card1.value)) {
    card1.value = 10;
  } else if (card1.value === "ACE") {
    card1.value = 11;
  } else {
    card1.value = +card1.value;
  }
  // converts card2 values
  if (faceCards.includes(card2.value)) {
    card2.value = 10;
  } else if (card2.value === "ACE") {
    card2.value = 11;
  } else {
    card2.value = +card2.value;
  }
  return { card1, card2 };
}

export default draw2Cards;
