
const car = {
    brand: 'BrandName',
    year: 2023
}

Object.defineProperty(car, 'year', {
    configurable: false,
});
console.log(car);

delete car.year;
console.log(car);








