function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const leapYear1 = 1800;
const result = isLeapYear(leapYear1);
console.log("Is leap Year ?", result)