// string
var time = '10:14pm';
// numbers
var phonePrice = 14000;
// boolean
var phoneWhiteColor = false;
//array, array related
var friends = ['junayed', 'naeem', 'mahmodul', 'shahin', 'oporbo', 'sadikul']
var elementCount = friends.length;
var oporboIndex = friends.indexOf('oporbo');
friends.push('raisul');
friends.pop();
//conditionals
var bookPrice = 125;
if (bookPrice <= 120) {
    console.log('I will buy this book')
}
else {
    console.log('Can you apply some discount for me. Please!')
}
//loop ----------

//while loop
var i = 0;
while (i <= 17) {
    i++;
}
//for loop
for (var i = 0; i < 20; i++) {

}
//function
function addFourNum(num1, num2) {
    console.log(num1, num2);
    var totalnum = num1 + num2;
    return totalnum;
}
var result = addFourNum(25, 25);
console.log(result);

// let const. 

//value of variable could change. akhaner let er mane hocca j, ami aber kono shomoy eter value change korte pari.
let onionPrice = 25;
onionPrice = 30;
onionPrice = 35;

// value of variable will not change. akhaner const er mane hocca j, ami r kono somoy e etar value change korbo na.
const myName = 'Mahmodul Hasan Shahin';
// myName = "abul mjai"; // arokom babe jodi change korte chai taile terminal e error dibe.
console.log(myName)
