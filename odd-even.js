// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 0);
// another type --
// console.log(number % 2 == 0);

// jodi jante chai j, ei shogka ta even kina ?
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNum = 9875;
const result = isEven(myNum);
console.log(result);
// another example . 
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 432344;
const result2 = isEven(myNumber);
console.log(result2);


// jodi jante chai j, ei number ta odd kina ?
function isOdd(numbr) {
    if (numbr % 2 != 0) {
        return true;
    }
    return false;
}
const isOddNumbr = 322423;
const result3 = isOdd(isOddNumbr);
console.log(result3);