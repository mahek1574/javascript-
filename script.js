// base salary
let salary = 20000;
let HRA = 10;
DA = 15;
TA = 12;

let total_salary =
  salary + (HRA * salary) / 100 + (DA * salary) / 100 + (TA * salary) / 100;
console.log(total_salary);

// if else condition

// eligible for voting

let age = 1;

if (age > 18) {
  console.log("you are eligible for vote");
} else {
  console.log(" you are not eligible for vote");
}

// find max value from 2

let num = 101;
let num1 = 201;

if (num > num1) {
  console.log("num is max");
} else {
  console.log("num1 is max");
}

// find max value from 3

let a = 10;
let b = 50;
let c = 300;

if (a > b && a > c) {
  console.log("a is max");
} else if (b > a && b > c) {
  console.log("b is max");
} else {
  console.log("c is max");
}

// find max value from 4

let aa = 110;
let bb = 220;
let cc = 330;
let dd = 440;
if (aa > bb && aa > cc && aa > dd) {
  console.log("aa is max");
} else if (bb > aa && bb > cc && bb > dd) {
  console.log("bb is max");
} else if (cc > aa && cc > bb && cc > dd) {
  console.log("cc is max");
} else {
  console.log("dd is max");
}

// Find Zero negative and positive

let number = 5;
if (number > 0) {
  console.log("positive");
} else if (number == 0) {
  console.log("Zero");
} else {
  console.log("negative");
}

// find week day

let week_day = 5;

if (week_day == 1) {
  console.log("Monday");
} else if (week_day == 2) {
  console.log("Tuesday");
} else if (week_day == 3) {
  console.log("Wednesday");
} else if (week_day == 4) {
  console.log("thursday");
} else if (week_day == 5) {
  console.log("Friday");
} else if (week_day == 6) {
  console.log("Saturday");
} else {
  console.log("sunday");
}

//  week day by switch

let weekday = "8";
switch (weekday) {
  case "1":
    console.log("Monday");

  case "2":
    console.log("Tuesday");

  case "3":
    console.log("Wednesday");

  case "4":
    console.log("thrusday");

  case "5":
    console.log("Friday");

  case "6":
    console.log("Saturday");

  case "7":
    console.log("Sunday");

  default:
    console.log("Invalid input");
}
// find leap year

let year = 5;

if (year % 4 === 0) {
  console.log("Leap year");
} else {
  console.log("Not leap year");
}

// cheak alphabet is vowel or consonant

let alpha = "a";

if (
  alpha == "A" ||
  alpha == "E" ||
  alpha == "I" ||
  alpha == "O" ||
  alpha == "U" ||
  alpha == "a" ||
  alpha == "e" ||
  alpha == "i" ||
  alpha == "o" ||
  alpha == "u"
) {
  console.log("its a vovel");
} else {
  console.log("consonant");
}

//  cheak input is alphabet or digit or special number

let input = "t";

if (input >= 0 && input <= 999) {
  console.log("Digit");
} else if ((input >= "A" && input <= "Z") || (input >= "a" && input <= "z")) {
  console.log("Alphabet");
} else {
  console.log("special Character");
}

// profit or loss

let actual_price = 500;
let selling_price = 490;

if (selling_price > actual_price) {
  console.log("Profit");
} else {
  console.log("Loss");
}

// Result Grade

let maths = 95;
let science = 100;
let ss = 90;
let Hindi = 90;
let Gujrati = 80;
let English = 80;
let Sanskrit = 80;
let Computer = 99;

let total_mark =
  maths + science + ss + Hindi + Gujrati + English + Sanskrit + Computer;

console.log(total_mark);

let percentage = total_mark / 8;

console.log(percentage);

if (percentage >= 90 && percentage <= 100) {
  console.log("A Grade");
} else if (percentage >= 80 && percentage < 90) {
  console.log("B Grade");
} else if (percentage >= 70 && percentage < 79) {
  console.log("C Grade");
}else if (percentage >= 60 && percentage < 69){
    console.log("D Grade");
}else if (percentage >= 50 && percentage <59 ){
     console.log("E Grade");
}else{
    console.log(Fail);
}

// lowercase or upeercase

let value = "K"
if (value >= "A" && value <= "Z"){
    console.log("Uppercase")
}else if (value >= "a" && value <= "z"){
    console.log("Lowercase")
}

// number of notes calculation

let amount = 84657 ;

let n500;
let n200;
let n100;
let n50;
let n20;
let n10;
let n5;
let n2;
let n1;

n500 = n200 = n100 = n50 = n20 = n10 = n5 = n2 = n1 = 0;

console.log(amount);

if (amount >= 500){
    n500 = parseInt(amount /500);
    amount = amount - 500 * n500;
}


if (amount >= 200){
    n200 = parseInt(amount /200);
    amount = amount - 200 * n200
}

if (amount >= 100){
    n100 =parseInt(amount/ 100);
    amount = amount - 100 * n100;
}
if (amount >= 50){
    n50 = parseInt(amount/50);
    amount = amount - 50 * n50;

}
if (amount >= 20){
     n20 =parseInt(amount/ 20);
     amount = amount - 20 * n20
}
if (amount >= 10){
    n10 =parseInt(amount /10);
    amount = amount - 10 * n10;
}
if (amount >= 5){
    n5 =parseInt (amount / 5);
    amount = amount - 5 *n5;

}
if (amount >= 2){
    n2 =parseInt(amount / 2);
    amount = amount - 2 * n2; 
}
if (amount >= 1){
    n1 = parseInt (amount / 1);
    amount = amount - 1 * n1;
}

console.log("500 Notes" + n500);
console.log("200 Notes" + n200) ;
console.log("100  Notes" + n100);
console.log("50 Notes"+ n50);
console.log("20 Notes" + n20);
console.log("10 Notes" + n10);
console.log ("5 Coins" + n5);
console.log("2  Coins" + n2);
console.log ("1  Coins"+ n1);

console.log(amount);

