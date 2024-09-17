function convert (sum, currency, targetСurrency) {
    const USD = 90;
    const EUR = 100;
    currency = currency.toUpperCase();
    targetСurrency = targetСurrency.toUpperCase();
    switch (currency) {
        case ('USD'): 
            switch (targetСurrency){
                case ('RUB'):
                    return (sum * USD).toFixed(2);
                case ('EUR'):
                    return ((sum * USD) / EUR).toFixed(2);
                default:
                    return null;
            }
        case ('EUR'):
            switch (targetСurrency) {
                case ('RUB'):
                    return (sum * EUR).toFixed(2);
                case ('USD'):
                    return ((sum * EUR) / USD).toFixed(2);
                default:
                    return null;
            }
        case ('RUB'):
            switch (targetСurrency) {
                case ('USD'):
                    return (sum / USD).toFixed(2);
                case ('EUR'):
                    return (sum / EUR).toFixed(2);
                default:
                    return null;
            }
        default:
            return null
        }
}

console.log(convert(1000, `eur`, `usd`));