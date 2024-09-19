function shuffle (digits = ['0','1','2','3','4','5','6','7','8','9']) {
    for (let i = digits.length - 1; i > 0; i--) {
        const randomDigit = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[randomDigit]] = [digits[randomDigit], digits[i]];
    }
    return digits.slice(0, 4).join('');
}

const getRandomCardNumber = Array.from({length: 4}, () => {
    return shuffle();
    }).join('-').toString();

function getRandomNumber (min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateArray (fn, count) {
    return Array.from({length: count}, () => fn());
} 

function generatePartCard (fn, count) {
    return generateArray(fn, count).join('');
}

function getRandomCardNumber2 () {
    const cardNumber = generateArray(() => generatePartCard(getRandomNumber, 4), 4);
    return cardNumber.join('-');
}

function checkLuna (cardNumber) {
    let sum = 0;
    cardNumber = cardNumber.replaceAll('-', '')
    for (const i in cardNumber) {
        let digit = Number(cardNumber[i]);
        if(i % 2 === 0){
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}


function resultTemplate (card) {
    const start = `Card number: ${card}`;
    const end = `Checking the correctness of the card number: ${checkLuna(card)}`;
    return `${start} ${end}`
}

const cardArray = Array.from({ length: 10 }, () => getRandomCardNumber2());
const resultArray = cardArray.map(resultTemplate);

for (const result of resultArray) {
    console.log(result);
}