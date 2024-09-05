function convert (amount, currency, targetСurrency) {
    const exchangeRate = {
        rubusd: 0.01,
        usdrub: 95,
        eurusd: 1.11,
        usdeur: 0.9,
        rubtry: 0.4,
        tryrub: 2.7
    }
    return amount * exchangeRate[currency.toLowerCase() + targetСurrency.toLowerCase()] || null;
}

console.log(convert(1000, `eUr`, `usD`));