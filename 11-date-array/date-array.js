function randomNumber (min = 1, max = 35) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Создаем массив с датами, формат даты определяет Format, конкатенируем полученный массив с масиивом февральских дат 

const inputDates = Array.from({ length: 10}, () => {
    const format = Math.random() > 0.5 ? '/' : '.';
    const dateArray = [
        format === '.' ? randomNumber() : randomNumber(0, 15),
        format === '.' ? randomNumber(0, 15) : randomNumber(),
        randomNumber(1900, 2050)
    ].map((x) => x.toString().padStart(2, '0'));
    return dateArray.join(format);
}).concat(Array.from({ length: 10 }, () => [randomNumber(28, 32), '02', randomNumber(1900, 2050)].join('-')));

// Конструктор Date возвращает строку предстваляющую текущее время (гггг.мм.дд)
// Функция getTime() возвращает число в милисекундах прошедших с 1970

function sortDate (first, second) {
    let day, month, year;
    [day, month, year] = first;
    const date1 = new Date(year, month, day).getTime();
    [day, month, year] = second;
    const date2 = new Date(year, month, day).getTime();
    return date1 - date2;
}

// Тернанрый оператор подставляет 0 к дд.мм, если число меньше 9

function formatDate (array) {
    return array.map(String).map((x, i) => i === 2 ? x.padStart(4, '0') : x.padStart(2, '0')).join('-');
}

function splittedArray (array) {
    const twoDimensionalArray = array
    .map(el => {
        let day, month, year;
        if (el.includes('/')) {
            [month, day, year] =  el.split('/').map(Number);
        } else {
            [day, month, year] = el.split(/\W/).map(Number);
        }
        return [day, month, year];
    })
    return twoDimensionalArray;
}

function filterWrongDate (array) {
    if (array.includes(NaN)) {
        return false;
    }
    [day, month, year] = array;
    const longMonthArray = [1, 3, 5, 7, 8, 10, 12];
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    switch(true) {
        case (day < 1 || day > 31):
            return false;
        case (month < 1 || month > 12):
            return false;
        case (day === 31 && !longMonthArray.includes(month)):
            return false;
        case (day === 29 && month === 2) && !isLeapYear:
            return false;
        case (isNaN(day || month || year)):
            return false;
        default:
            return true;
    }
}

function correctDate (array, fn) {
    return splittedArray(array).filter(fn).sort(sortDate).map(formatDate);
} 

const allDates = inputDates;
const correctDates = correctDate(allDates, filterWrongDate);
console.log(allDates);
console.log(correctDates);