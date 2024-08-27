const hasLicence = true;
const age = 17;
const isDrunk = false;

let result = hasLicence 
    && age >= 18
    && !isDrunk;
console.log(`Пользователь ${result ? 'может' : 'не может'} сесть за руль`)
    
    