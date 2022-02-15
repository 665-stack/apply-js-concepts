function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    // if (year % 4 == 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
}
var herYear = 2023;
var result1 = leapYear(herYear);
console.log('Is this leap year ?', result1)