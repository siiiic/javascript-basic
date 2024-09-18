function getRandomNumber (num = 90) {
    return Math.ceil(Math.random() * num)
}

function getRandomPassword(length = 12) {
    const symbolArray = Array.from({ length: 90 }, (_, index) => String.fromCharCode(index + 33));
    const password = Array.from({ length }, () => symbolArray[getRandomNumber()]);
    return password.join('');
}

function crypto (password) { 
    if (!password || !password.length) {
        return NaN;
    }
    const array = password.split('');
    if(array.length < 5) {
        return null;
    } 
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middleIndex).reverse();
    const secondHalf = array.slice(middleIndex).reverse();
    const length = secondHalf.length;
    [secondHalf[1], secondHalf[length - 2] = secondHalf[length - 2], secondHalf[1]];
    const encrypted = firstHalf.concat(secondHalf);
    return encrypted.join('')
}

function checkPassword (encrypted, original) {
    return original === crypto(encrypted);
}


const password = getRandomPassword(8);
const encrypted = crypto(password);

console.log(`Password: ${password}`);
console.log(`Encrypted password: ${encrypted}`);
console.log(`Password verification: ${checkPassword(encrypted, password)}`);

const password2 = getRandomPassword();
const encrypted2 = crypto(password2).substring(1);

console.log(`Password: ${password2}`);
console.log(`Encrypted password: ${encrypted2}`);
console.log(`Password verification: ${checkPassword(encrypted2, password2)}`);