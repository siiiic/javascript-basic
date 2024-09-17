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
        console.log(sum);
    }
    return sum % 10 === 0;
}

const cardNumber = getRandomCardNumber;
console.log(`Card number: ${cardNumber}`);
console.log(`Checking the correctness of the card number: ${checkLuna(cardNumber)}`);