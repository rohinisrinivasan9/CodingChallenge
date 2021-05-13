function createDeck() {
  var deck = [];
  var pip = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];
  var suits = ['♡', '♣', '♢', '♠'];

  for (var sCounter = 0; sCounter < 4; sCounter++) {
    for (var pCounter = 0; pCounter < 13; pCounter++) {
      var suitsCreated = suits[sCounter];
      var pipCreated = pip[pCounter];
      deck.push(suitsCreated + pipCreated);
    }
  }
  //console.log(deck);
  return deck;
}

function shuffle(deck) {
  for (var i = 0; i < 52; i++) {
    var temp = deck[i];
    var randomNumber = Math.floor(Math.random() * 52);
    deck[i] = deck[randomNumber];
    deck[randomNumber] = temp;
  }
}

// var testingDeck = createDeck();
// shuffle(testingDeck);
// console.log(testingDeck);

var deal = function(p) {
    if(p <= 0){
      console.log("Invalid number of users");
    } else if(p <= 52 && p>0) {
      var players =[];
      var deck = createDeck();
      shuffle(deck);
      //p = 4; //hardcoding number of players for now
      console.log("SECOND SHUFFLE");
      console.log(deck);
      console.log(deck.length);
    for(var i =0;i<p ;i++)
    {
        var temp=[];
        players.push(temp);
    }

    for( var cardIndex=0; cardIndex < deck.length;)
    {
        for(var playerIndex =0; playerIndex < p;playerIndex++)
        {
            if(cardIndex < deck.length)
            {
                var card = deck[cardIndex];
                players[playerIndex].push(card);
                cardIndex++;
            }
        }

    }

    return players;
  } else {
    console.log("Number of players exceeded.");
  }

    //return shuffle(deck).splice(card, 1)[0];
  }

//Test case 1
   var players = deal(3);
   for(var i=0;i<players.length;i++)
   {
       console.log("Player "+ i +" card",players[i] );

   }
// Test case 2
   deal(55);
// Test Case 3
   deal(-1);
