const queryObject = {
    search: '',
    take: ''
};

function queryObjectToString (queryObject) {
    let queryArray = [];
    for (const [key, value] of Object.entries(queryObject)) {
        queryArray.push(`${key}=${value}`); 
    }
    return queryArray.join('&')
}

console.log(queryObjectToString(queryObject));