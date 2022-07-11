const generator = require('./generator.js');

const mainLoop = () => {
    console.log('Today\'s inspirational quote:');
    let quote = generator.generateQuote();
    let message = `${quote.quote} - ${quote.author}`;
    console.log(message);

    while (true) {
        console.log('Choose an option: ');
        // 1: Another quote
        // If 
        // 2: Quit
        // Default: Invalid option
    }
}

mainLoop();