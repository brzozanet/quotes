const API_URL = "https://dummyjson.com";
const getAllQuotes = () =>
  fetch(`${API_URL}/quotes`).then((response) => response.json());

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

getAllQuotes().then((dataFromJson) => {
  const randomQuote = dataFromJson.quotes[getRandomNumber(0, dataFromJson.quotes.length)];
  
  const quote = `${randomQuote.quote}`;
  quoteElement.textContent = quote;

  const author = `${randomQuote.author}`;
  quoteAuthorElement.textContent = author;
});

setInterval(() => {
  getAllQuotes().then((dataFromJson) => {
    const randomQuote = dataFromJson.quotes[getRandomNumber(0, dataFromJson.quotes.length)];

    const quote = `${randomQuote.quote}`;
    quoteElement.textContent = quote;

    const author = `${randomQuote.author}`;
    quoteAuthorElement.textContent = author;
  });
}, 5000);
