function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myIches = 132;
var feet = inchToFeet(myIches);
console.log('myInches to feet', feet);

var naniInches = 144;
var feet = inchToFeet(naniInches);
console.log('naniInches to feet', feet)

var nanaInches = 156;
var feet = inchToFeet(nanaInches);
console.log('nanaInches to feet', feet)

var dadiInches = 168;
var feet = inchToFeet(dadiInches);
console.log('dadiInches to feet', feet)



// mile to kilometer
function mileToKilometres(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometres(26.2);
console.log('marathon mile to km', marathon)