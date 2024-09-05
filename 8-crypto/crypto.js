function crypto (password) {
    const array = password.split('');
    const sliced = array.splice(password.length - 3);
    const encrypted = sliced.concat(array)
        .reverse()
        .join('');
    return encrypted;
}

function decrypted (encrypted, password) {
    return crypto(password) === encrypted ? true : false;
}

console.log(crypto('purple'));
console.log(decrypted('rupelp', 'purple'));
console.log(crypto('qWerTy1234'));
console.log(decrypted('1yTreWq432', 'qWerTy1234'));
console.log(crypto('Не сработал((('));
console.log(decrypted('латобарс еН(((', 'Не сработал)))'));