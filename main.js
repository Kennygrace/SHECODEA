let quotes = [
    "All dreams can come true, if we have the courage to pursue them. -Walt Disney.",
    "The way to get started is to quit talking and start working.",
    "Hard things are put in our way not to stop us, but to call out our strength.",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You learn to write by writing.",
    "If people are doubting how far you can go, go so far you can\'t hear them anymore.",
    "Your limitation- it\'s only your imagination.",
    "Push yourself, Because no one else will do it for you.",
    "Sometimes later becomes never, do it now.",
    "All our dreams can come through, if we have the courage to pish them.",
    "Great things never comes from comfort zones.",
    "Dream it. Wish it. Do it.", 
    "Success doesn\'t just find you, you have to go out and get it.",
    "Dream bigger. Do bigger.",
    "Don\'t stop when you are tired, stop when you are done.",
    "Wake up with determination, sleep with satisfaction",
    "Do something today that your future self will thank you for.",
    "It\'s going to be hard, but hard does not mean impossible.",
    "Don\'t wait for opportunity. Create it.",
    "The key to success is to focusnon goals not obstacles.",
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}