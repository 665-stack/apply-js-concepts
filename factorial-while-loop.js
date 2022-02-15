function factorial(number) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact = fact * i;
        console.log(fact, i);
        i++;
    }
    return fact;
}
const factorialNum = factorial(5);
console.log('result1 ', factorialNum);

// same code but from reverse side
function factorial2(num) {
    let fact2 = 1;
    let i = num;
    while (i >= 1) {
        fact2 = fact2 * i;
        console.log(fact2, i)
        i--;
    }
    return fact2;
}
const factorialNum2 = factorial2(9);
console.log("factorial 2 is ", factorialNum2);

// same code but from reverse side with for loop
function factorial3(num2) {
    let fact3 = 1;
    for (let i = num2; i >= 1; i--) {
        fact3 = fact3 * i;
        console.log(fact3, i);
    }
    return fact3;
}
const factorialNum3 = factorial3(9);
console.log('factorial 3 is', factorialNum3);