/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Array named quotes with a quote and source property
let quotes = [
  {
  quote: "Every strike brings me closer to the next home run.",
  source: "Babe Ruth"
  },
  {
  quote: "An unexamined life is not worth living.",
  source: "Socrates"
  },
  {
  quote: "The best revenge is massive success.",
  source: "Frank Sinatra"
  },
  {
  quote: "Believe you can and you’re halfway there.",
  source: "Theodore Roosevelt"
  },
  {
  quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
  source: "Maya Angelou"
  },
  {
  quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  source: "Joshua J. Marine"
  },
  {
  quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
  source: "Benjamin Franklin"
  },
  {
  quote: "A person who never made a mistake never tried anything new.",
  source: "Albert Einstein"
  },
  {
  quote: "Build your own dreams, or someone else will hire you to build theirs.",
  source: "Farrah Gray"
  },
  {
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "Oprah Winfrey"
  },
  {
  quote: "You may be disappointed if you fail, but you are doomed if you don't try.",
  source: "Beverly Sills"
  },
  {
  quote: "Eighty percent of success is showing up.",
  source: "Woody Allen"
  },
  {
  quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
  source: "Christopher Columbus"
  },
  {
  quote: "Your time is limited, so don’t waste it living someone else’s life.",
  source: "Steve Jobs"
  },
  {
  quote: "I am not a product of my circumstances. I am a product of my decisions.",
  source: "Stephen Covey"
  },
  {
  quote: "This Random Quote Generator Project is challenging.",
  source: "Ricardo Franco",
  citation: "Ricardo's Office",
  year: 2019
  }
];

// "getRandomQuote" function that returns a random "quotes" array object
function getRandomQuote ( ) {
  let randomNumber = Math.ceil(Math.random() * quotes.length) - 1;
    return quotes[randomNumber];
}

//Holds custom HTML string which changes value every time nested "random" variable is called
function printQuote ( ) {
  let random = getRandomQuote();
  let html = '';
  html += '<p class="quote"> ' + random.quote + '</p>';
  html += '<p class="source"> ' + random.source;
  if (random.citation) {
    html += '<span class="citation"> ' + random.citation + '</span>';
  }
  if (random.year) { 
    html += '<span class="year"> ' + random.year + '</span>';
  }
  html += ' </p>';
  let outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
  return html;
}

// Clicking the "Show another quote" button will generate a new random quote from the quotes array
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
