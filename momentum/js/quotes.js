const quotes = [
  {
    quote: "The first child said he's afraid.",
    author: "strange1",
  },
  {
    quote: "The second child said he's afraid.",
    author: "strange2",
  },
  {
    quote: "The third child said he's afraid.",
    author: "strange3",
  },
  {
    quote: "The fourth child said he's afraid.",
    author: "strange4",
  },
  {
    quote: "The fifth child said he's afraid.",
    author: "strange5",
  },
  {
    quote: "The sixth child said he's afraid.",
    author: "strange6",
  },
  {
    quote: "The seventh child said he's afraid.",
    author: "strange7",
  },
  {
    quote: "The eighth child said he's afraid.",
    author: "strange8",
  },
  {
    quote: "The nineth child said he's afraid.",
    author: "strange9",
  },
  {
    quote: "The tenth child said he's afraid.",
    author: "strange10",
  },
  {
    quote: "The eleventh child said he's afraid.",
    author: "strange11",
  },
  {
    quote: "The twelveth child said he's afraid.",
    author: "strange12",
  },
  {
    quote: "The thirteen child said he's afraid.",
    author: "strange13",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
