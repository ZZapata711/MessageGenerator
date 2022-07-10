const quotes = require('./quotes.js');
let quoteList = quotes.quotes;

const generateQuote = () => {
    if (quoteList.length === 0) {
        return 'Sorry, you have already read all of today\'s inspirational quotes';
    }
    let randNum = Math.floor(Math.random() * quoteList.length);
    return quoteList.splice(randNum, 1)[0];
}

module.exports.generateQuote = generateQuote;