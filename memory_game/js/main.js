console.log("Up and running!");


let cards = ["queen","queen","king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] )
	alert("You found a match");
else if (cardsInPlay.length === 2)
	alert("Cards don't match");