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

const canDelete = (value) => value === String(value) || value % 2;


console.log(filter(arr, canDelete));