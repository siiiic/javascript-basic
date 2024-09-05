const arr = [-4, 24, 43, 1, -40, -5, 88, -7, 10, 0];

function sort (array) {
    for(let i = 0; i < array.length; i++)
        for(let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            [array[j], array[i]] = [array[i], array[j]];
        }
    }
    return array;
}

console.log(sort(arr));