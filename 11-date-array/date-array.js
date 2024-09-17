const dateArray = ['101/10/2003','23.52.1003', '13,05,2001', '29-02-2024', '12.12.1998', 'day.month.year', '0,0,0'];

function splittedArray (array) {
    const twoDimensionalArray = array
        .map(el => el
            .split(/\/|\.|\-|\,/) 
            .map(innerEl => Number(innerEl)));
    return twoDimensionalArray;
}

function filterWrongDate (array) {
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
    return splittedArray(array).filter(fn).map(el => el.join('-'))
} 

const result = correctDate(dateArray, filterWrongDate);

console.log(result);