const numbers = Array.from({length: 100}, () => {
    const factor = Math.random() > 0.5 ? 1 : -1;
    const randomNumber = Math.ceil(Math.random() * 1000 * factor);
    return randomNumber;
});

function template (firstNumber, secondNumber, condition) {
    return !condition ? firstNumber > secondNumber : secondNumber > firstNumber;
}

function sort (incomingArray, condition = false) {
    const array = [...incomingArray]
    for(let i = 0; i < array.length; i++)
        for(let j = i; j < array.length; j++) {
        const isExchange = template(array[i], array[j], condition)
        if (isExchange) {
            [array[j], array[i]] = [array[i], array[j]];
        }
    }
    return array;
}

console.log(numbers);
console.log(`Массив отсортирован по возрастанию: ${sort(numbers)} \n`);
console.log(`Массив отсортирован по возрастанию: ${sort(numbers)}`);