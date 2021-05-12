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
    //return shuffle(deck).splice(card, 1)[0];
  }

   var noofplayers=8;
   var players = deal(noofplayers);
   for(var i=0;i<players.length;i++)
   {
       console.log("Player "+ i +" card",players[i] );

   }
