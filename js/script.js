// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", function() {
  printQuote();
  reset();
}, false);

// array of quotes
var quotes = [
  {
    quote: "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.",
    source: "Vincent van Gogh",
    tags: "Artist, Historical Figure"
  },
  {
    quote: "Life has meaning only in the struggle. Triumph or defeat is in the hands of the Gods. So let us celebrate the struggle!",
    source: "Stevie Wonder",
    tags: "Musician"
  },
  {
    quote: "If you're going through hell, keep going.",
    source: "Winston Churchill",
    tags: "Politician, Historical Figure"
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    tags: "Author"
  },
  {
    quote: "We must accept finite disappointment, but never lose infinite hope.",
    source: "Martin Luther King, Jr.",
    tags: "Activist, Historical Figure"
  },
  {
    quote: "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.",
    source: "Kanye West",
    tags: "Musician"
  },
  {
    quote: "There is some good in this world, and it's worth fighting for.",
    source: "J.R.R. Tolkien",
    tags: "Author",
    citation: "The Two Towers",
    year: 1954
  }
]

// every 8 seconds (8000 milliseconds), automatically changes the quote
var quoteInterval = window.setInterval(printQuote, 8000);

// every 8 seconds (8000 milliseconds), automatically changes the background
// color at the same time the quote changes
var backgroundColorInterval = window.setInterval(setBackgroundColor, 8000);

// finds a random color
function getRandomColor() {
  var colors = ['red', 'blue', 'orange', 'purple', '#36b55c'];
  var random = Math.floor(Math.random()*colors.length-1)+1;
  console.log(random);
  return colors[random];
}

// sets the background color
function setBackgroundColor() {
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.color = randomColor;
}

// reset function which resets interval;
// calls setBackgroundColor to choose a new random background color;
// when "Show another quote" button is clicked
function reset() {
  clearInterval(quoteInterval);
  quoteInterval = window.setInterval(printQuote, 8000);
  setBackgroundColor();
}

// generates random number between 0 and quotes.length-1;
// chooses a quote in quotes array at position of random number;
// returns that quote
function getRandomQuote() {
  var randomNum = Math.floor(Math.random()*quotes.length-1)+1;
  var randomQuote = quotes[randomNum];
  return randomQuote;
}

// calls getRandomQuote() to retrieve a random quote object;
// constructs a string consisting of at least a quote, a source, and tags;
// if citation/year exists in quote object, they are added to string;
// then prints quote
function printQuote() {
  var randomQuote = getRandomQuote();
  var fullQuote =
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source;
  if (randomQuote.citation != null) {
    fullQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year != null) {
    fullQuote += '<span class="year">' + randomQuote.year + '</span>';
  }
  fullQuote += '</p>';
  fullQuote += '<p class="tags">' + randomQuote.tags + '</p>';
  document.getElementById('quote-box').innerHTML = fullQuote;
}
