const generator = require('./generator.js');

const mainLoop = () => {
    console.log('Today\'s inspirational quote:');
    let quote = generator.generateQuote();
    let message = `${quote.quote} - ${quote.author}`;
    console.log(message);
}

mainLoop();