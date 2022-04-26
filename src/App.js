import logo from "./logo.svg";
import axios from "axios";

import Cards from "./CardsComponent";
import draw2Cards from "./helpers";

// add var for cards here to pass as props
// const { card1, card2 } = draw2Cards();
const cards = [];

async function starter() {
  const { card1, card2 } = await draw2Cards();
  cards.push(card1, card2);
}

starter();

console.log(cards);

function App() {
  return (
    <div>
      <div>Hello World</div>
      <Cards card1={cards[0]} card2={cards[1]} />
    </div>
  );
}

export default App;
w;
