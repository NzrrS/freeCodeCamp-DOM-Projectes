const person = document.getElementById("person");
const qoute = document.getElementById("qoute");
const newQoute = document.getElementById("new-qoute");






const quotes = [
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  { quote: "What we think, we become.", author: "Buddha" },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  { quote: "I came, I saw, I conquered.", author: "Julius Caesar" },
  { quote: "Knowledge is power.", author: "Francis Bacon" },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  { quote: "I have a dream.", author: "Martin Luther King Jr." },
  { quote: "An unexamined life is not worth living.", author: "Socrates" },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  {
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    quote: "Do what you love, and you’ll never work another day in your life.",
    author: "Confucius",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  { quote: "Big journeys begin with small steps.", author: "Unknown" },
  { quote: "Courage is grace under pressure.", author: "Ernest Hemingway" },
  {
    quote:
      "Do not fear mistakes. You will know failure. Continue to reach out.",
    author: "Benjamin Franklin",
  }
];

newQoute.addEventListener("click",()=>{
    let random = Math.floor(Math.random() * quotes.length)
    qoute.textContent = quotes[random].quote
    person.textContent = quotes[random].author
})