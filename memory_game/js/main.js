console.log("Up and running!");


let cards = [
	{
		rank:"queen",
		suit:"hearts",
		cardImage:"images/queen-of-hearts.png"
	},
	{
		rank:"queen",
		suit:"diamonds",
		cardImage:"images/queen-of-diamonds.png"
	},
	{
		rank:"king",
		suit:"hearts",
		cardImage:"images/king-of-hearts.png"
	},
	{
		rank:"king",
		suit:"hearts",
		cardImage:"images/king-of-hearts.png"
	}			
]	

let cardsInPlay = [];
//let cardOne = cards[0];
//let cardTwo = cards[1];

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

	
function flipCard (cardId)
{
	console.log("Flipped "+ cards[cardId].rank );
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	
}

function checkForMatch()
{
	if (cardsInPlay.length === 2 && cardsInPlay[0].rank === cardsInPlay[1].rank )
		alert("You found a match");
	else if (cardsInPlay.length === 2)
		alert("Cards don't match");
}
flipCard(0);
flipCard(1);