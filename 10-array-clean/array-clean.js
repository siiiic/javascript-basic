const arr = [4, 5, 56, '-4', '11', -5, 0, 1223, 'Bang'];

function filter (array, fn) {
    let filteredArray = [];
    for (const el of array) {
        if (!fn(el)){
            filteredArray.push(el);
        }
    }
    return filteredArray;
}

function canDelete (value) {
    if (value === String(value) || value % 2 === 0) {
        return true;
    }
    return false;
}

console.log(filter(arr, canDelete));