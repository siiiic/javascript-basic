const addressLat = 10;
const addressLong = 16;
const positionLat = 7;
const positionLong = 2;

const distance = Math.sqrt((addressLat - addressLong) ** 2 + (positionLat - positionLong) ** 2);
console.log(distance);