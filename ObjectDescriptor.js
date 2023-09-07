
const car = {
    brand: 'BrandName',
    year: 2023
}

Object.defineProperty(car, 'year', {
    //configurable: false,
    enumerable: false
});

console.log(Object.keys(car));
console.log(car.propertyIsEnumerable('year'));







