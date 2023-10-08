

/*
function Minus(num1 = 0){

    return function(num2 = 0){
        
        return num1 - num2;
    }
}

console.log(Minus()(6));
*/

function Multiply(num1){

    return function(num2){

        return num1 *= num2
    }
}

const mult = Multiply(10);
console.log(mult(2));
console.log(mult(3));