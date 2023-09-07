
const car = {
    brand: 'BrandName',
    year: 2023,

    get age(){
        return `Car was released in ${this.year}`;
    },

    set age(value){
        this.year = value;
    }
}

//Object.defineProperty(car, 'age', {
    //configurable: false,
    //enumerable: false
    //writable: false,

//    get: function(){
//        return `Car was released in ${this.year}`;
//    }
//});
//console.log(Object.keys(car));
//console.log(car.propertyIsEnumerable('year'));
//car.age = 2020;
//console.log(car.age);


Object.defineProperty(window, 'globalVar', {
    set: function(value){
        console.log(value);
        debugger;
    }
})

function foo(){
    globalVar = 10;
}

foo();
console.log(globalVar);


