

/*
function Minus(num1 = 0){

    return function(num2 = 0){
        
        return num1 - num2;
    }
}

console.log(Minus()(6));
*/

/*
function Multiply(num1){

    return function(num2){

        return num1 *= num2
    }
}

const mult = Multiply(10);
console.log(mult(2));
console.log(mult(3));
*/

const module = (function(){

    let str = '';

    function setString(value = ''){

        str = String(value);
        return str;
    }

    function GetString(){
        return str;
    }

    function StringLength(){
        return str.length;
    }

    function ReverseString(){
        return str.split('').reverse().join('');
    }

    return {
        setString,
        GetString,
        StringLength,
        ReverseString
    }
})();

