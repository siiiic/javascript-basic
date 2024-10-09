const queryObject = {
    search: '',
    take: ''
};

const queryToString = (url, params) => `${url}/?${Object.entries(params).map(x => x.join('=')).join('&')}`
console.log(queryToString(queryObject ));