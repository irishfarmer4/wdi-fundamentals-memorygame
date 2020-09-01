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

	
function flipCard ()
{
	let cardId = this.getAttribute("data-id");
	console.log("Flipped "+ cardId );
	cardsInPlay.push(cards[cardId]);
	
	//flip card
	//let cardToFlip = document.getElementById(cardId);
	let cardToFlip = document.querySelectorAll('[data-id="'+cardId+'"]')[0];
	
	//test if found
	/*  if(typeof(cardToFlip) != 'undefined' && cardToFlip != null){
        alert('Element exists!');
    } else{
        alert('Element does not exist!');
        return;
    }
*/
	console.log("setting " + cards[cardId].cardImage + " from " + cardToFlip.getAttribute('src'));
	cardToFlip.setAttribute('src', cards[cardId].cardImage);
	
	setTimeout(function(){ 
			if (cardsInPlay.length === 2 )
					checkForMatch();	
		}, 100);
	
	
	
}

function checkForMatch()
{
	if (cardsInPlay[0].rank === cardsInPlay[1].rank )
		alert("You found a match");
	else
		alert("Cards don't match");
			
		//reset game
		cardsInPlay.pop();
		cardsInPlay.pop();
		
		//reset images
		for (let i=0;i<cards.length;i++)
		{
			let cardToFlip = document.querySelectorAll('[data-id="'+i+'"]')[0];
			cardToFlip.setAttribute('src', "images/back.png");
		}	

}

function createBoard()
{
	//get the parent div element
	let gameBoard = document.getElementById('game-board');
	
	for (let i=0;i<cards.length;i++)
	{
		const newImage = document.createElement('img');
		//newImage.setAttribute('src', cards[i].cardImage);
		newImage.setAttribute('src', "images/back.png");
		newImage.setAttribute('data-id', i);
		newImage.addEventListener('click', flipCard);
		gameBoard.appendChild(newImage);
	}
}
createBoard();