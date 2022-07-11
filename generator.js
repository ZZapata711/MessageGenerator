const quotes = require('./quotes.js');
let quoteList = quotes.quotes;

const generateQuote = () => {
    if (quoteList.length === 0) {
        return null;
    }
    let randNum = Math.floor(Math.random() * quoteList.length);
    return quoteList.splice(randNum, 1)[0];
}

module.exports.generateQuote = generateQuote;