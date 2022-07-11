const generator = require('./generator.js');
const prompt = require('prompt-sync')();

const mainLoop = () => {
    console.log('Today\'s inspirational quote:');
    let quote = generator.generateQuote();
    let message = `${quote.quote} - ${quote.author}`;
    console.log(message);

    let loop = true;
    while (loop === true) {
        const option = prompt('Would you like to see another quote? (y/n): ');
        switch (option.toLocaleLowerCase()) {
            case ('y'):
                let quote = generator.generateQuote();
                let message = `${quote.quote} - ${quote.author}`;
                console.log(message);
                continue;
            case ('n'):
                loop = false;
                break;
            default:
                console.log('Invalid option.');
                continue;
        }
    }
}

mainLoop();