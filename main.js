const generator = require('./generator.js');
const prompt = require('prompt-sync')();

const mainLoop = () => {
    let quote = generator.generateQuote();
    let message = `${quote.quote} - ${quote.author}`;
    let spacing = "-";
    console.log(spacing.repeat(20));
    console.log('Today\'s inspirational quote:');
    console.log(spacing.repeat(20));
    console.log(message);

    let loop = true;
    while (loop === true) {
        console.log(spacing.repeat(20));
        const option = prompt('Would you like to see another quote? (y/n): ');
        switch (option.toLocaleLowerCase()) {
            case ('y'):
                // Check if quote list is empty
                let quote = generator.generateQuote();
                if (quote === null) {
                    console.log(spacing.repeat(20));
                    console.log('Sorry, you have already read all our available quotes for the day.');
                    loop = false;
                    break;
                }
                else {
                    let message = `${quote.quote} - ${quote.author}`;
                    console.log(spacing.repeat(20));
                    console.log(message);
                    continue;
                }
            case ('n'):
                loop = false;
                break;
            default:
                console.log(spacing.repeat(20));
                console.log('Invalid option.');
                continue;
        }
    }
}

mainLoop();