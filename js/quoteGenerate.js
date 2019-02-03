var quotes = [
'“Dogs do speak, but only to those who know how to listen.”– Orhan Pamuk',
'“Dogs’ lives are too short. Their only fault, really.” – Agnes Sligh Turnbull',
'“Dogs are not our whole life, but they make our lives whole.” – Roger Caras',
'“Dogs never bite me. Just Humans” – Marilyn Monroe',
'“Scratch a dog and you’ll find a permanent job.” – Franklin P. Jones',
'“A lot of shelter dogs are mutts like me.” – Barack Obama',
'“The only creatures that are evolved enough to convey pure love are dogs and infants.” — Johnny Depp',
'“I don’t think twice about picking up my dog’s poop, but if another dog’s poop is next to it, I think, ‘Eww, dog poop!”  – Jonah Goldberg',
'“There is no psychiatrist in the world like a puppy licking your face.” – Ben Williams'
]


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
