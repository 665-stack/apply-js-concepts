let factorial = 1;
for (let i = 1; i < 14; i++) {
    factorial = factorial * i;
    console.log(factorial, i)
}

// oporer same code tai just function diye lekha. example with for loop -----

function secFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;

}
var resultfact = secFactorial(7);
console.log('the factorial of 7 is', resultfact)