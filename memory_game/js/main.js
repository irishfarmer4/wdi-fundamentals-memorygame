console.log("Up and running!");


let cards = ["queen","queen","king", "king"];
let cardsInPlay = [];
//let cardOne = cards[0];
//let cardTwo = cards[1];

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

	
function flipCard (cardId)
{
	console.log("Flipped "+ cards[cardId] );
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	
}

function checkForMatch()
{
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] )
		alert("You found a match");
	else if (cardsInPlay.length === 2)
		alert("Cards don't match");
}
flipCard(0);
flipCard(2);