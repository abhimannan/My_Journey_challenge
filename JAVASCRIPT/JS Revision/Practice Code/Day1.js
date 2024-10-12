console.log("abhi");
alert box:
alert("Double quotes");
alert('single quote');
// user input 
window.prompt("enetr the age: ");
window.alert("Receive inputs :");
console.log("CTRL+Shift+J");

//datatypes in js
primitive vs non - primitive datatypes
primitive datatypes
let age = 20;
let name = "abhi";
let isstudent = true;
let x;
let car = {
  is: 90,
  name: "lambo"
}
let marks = [90, 0, 98, 87];
console.log(typeof (marks))
console.log(marks)

//creating class and for the same class 
//i am created multiple objects
class student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}
let car1 = new student("lambo", 152);
let car2 = new student("abhi", 185);
let car3 = new student("geetha", 65);
console.log(car2);

// we can change the value of the variable
var name = "abhi";
name = "geetha";
console.log(name);

// task : display the name in the alert box without using the string
alert(name)

let age = window.prompt("enter your age");
alert(`Your age is ${age}`);

// rules to create variables
   =>it must have meaning
  => variable name can't start width numbers
   =>doesn't have space 
   =>don't start with special charecters
   =>we can create an variable with "camalCase"
   => resevered words cant be used(keywords, datatypes)


//     Strings :
//      Concatination +
let first_name = "abhi";
let last_name = "mannan";
let fullname = first_name + " " + last_name;
// console.log(fullname);
alert(first_name.length);


// Task :-
function usermessage() {
  let message = window.prompt("Enter the message : 10charecters");
  if (message.length > 10) {
    console.log(message);
  }
  else {
    console.log("enter the more charecters");
  }
}
usermessage();

// Task :-o/p=>Your have written 182 charecters 
//             you have -42 charecters left

function usermessage() {
  let totalcharecters = 10;
  let user = window.prompt("enter the feedback with in", totalcharecters);
  let userLength = user.length;
  if (userLength < 10) {
    console.log(`U have entered ${userLength}charecters and remaing ${totalcharecters - userLength}charecters`)
  }
  else if (userLength > 10) {
    let display = user.slice(0, 10);
    console.log(display.toUpperCase());
  }
}
usermessage();

let name = "abhi mannan";
console.log(name.slice(5, 15));

first letter sholud be Capital
console.log(name.charAt("a").toUpperCase() + name.slice(1, 11));

// Task :-

let userName = window.prompt("Eneter Your Name : ");
alert(`Hellow ${userName}`);
name has to Start with UPPERCASE
let upper = userName.charAt(0).toUpperCase(); // first letter => variable.slice(0,1)
alert(`Hello ${upper}${userName.slice(1, userName.length)}`);

/* Operators : Operators are used to perform some mathematic operations
Types :
=>Arithematic Operators
=>Comparision Operators
=>Assignment Operators
=>Logical Operators
=>Bitwise Operators
=>Ternary operator */

// Arithematic oprators +,-,*,/,%,**,++,--
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);  // Remainder
console.log(a / b);  // Coefficient
console.log(a++);
console.log(a--);

// Comparision operators
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
// ==    ,    ====
let marks = 46;
let anothermarks = "46";
console.log(marks == anothermarks); // checks only the values same or not
console.log(marks === anothermarks); // chacks the valuse + datatypes 

// Assignment operators 
let x = 10;
console.log(x += 10);    // x+=10 ==> x=x+10
console.log(x -= 10);
console.log(x *= 10);
console.log(x %= 10);

// Logical operator
console.log(a && b);
console.log(a || b);
console.log(!a);

// Bitwise Operators &,|,!,<<,>>,^,~
console.log(a & b);

// ternary oprator  "  ?  "   
// Shortcut of the if else statement
let age = 18;

age < 18 ? console.log("Minor") :
  console.log("Major");

// Task :  to convert dog age to human age
// () has highest priority
let dogAge = window.prompt("Enter The Dod Age : ");
Number(dogAge);
let humanAge = (dogAge - 2) * 4 + 21;
console.log(humanAge);

// Increment,decrement Operators
// ++  ,  --
// +=,-=,%=,/=,*= Assignmwnt operators
var x = 5;
x = x + 1;   //x++
console.log(x)
x = x - 1;   //x--
console.log(x);

var n1 = 10;
var n2 = 10;
console.log(n1 += n2);

// Functions

// FUNCTION STATEMENT or FUNCTION DECLARATION

function displayname() {
  return "Abhi Mannan";
}
alert(displayname());

function getMilk() {
  alert("LeaveHouse");
  alert("GetCash");
  alert("BuyMilk");
}
getMilk();

// FUNCTION EXPRESSION

let y = function () {
  return "abhi";
}
console.log(y());

/* THE DIFFERENCE B/W FUNCTION EXPRESSION & FUNCTION STATEMENT */
// THE FUNCTION STATEMENT WE CALL CALL BEFORE THE DECLARATION OF THE FUNCTION
// INCASE OF FUNCTION STATEMENT WE CAN'T CALL IT BEFORE THE FUNCTION DECLARATION


// Annomous Function  : function are used as values
var add = function (a, b) {
  return a + b;
}
console.log(add(8, 8));

// Arrow Function
var a = 10;
var b = 10;
var add = (a, b) => {
  return a + b;
}
console.log(add(2, 2));

function main() {
  return () => {
    return console.log("Move Function")
  };

}
console.log(main());

// Nmaed function 
let name = function named() {
  return console.log("Named function");
}
named();

// Parameters VS Arguments
function milkPrice(botteles) { // parameters
  var price = botteles * 20;
  console.log(`the price for the ${botteles}bottles milk is ${price}`);
}
milkPrice(5);   // Arguments


// Task :- If u enter the money then we need to calculate the number of bottles can buy
function battles(money) {
  var battleprice = 10;
  var noofbottles = Math.floor(money / battleprice);
  console.log(`You Can Buy ${noofbottles} Bottles`);
}
battles(52);

// Task :- If u enter the money then we need to calculate the number of bottles can buy
function battles(money) {
  var battleprice = 10;
  var noofbottles = Math.floor(money / battleprice);
  console.log(`You Can Buy ${noofbottles} Bottles`);
}
battles(52);


// TASK : If the person lives 90 years,then we have to calculate that the user 
//        is going to enter his age then we need to calculate the remaining
//        days,weeks,months he will live in this world
function lifeInWeeks() {
  var age = window.prompt("Enter Your Age To Calculated How Many Days,Weeks,Months U Will Live In This World...");

  // No. of days,weeks,months in a year
  let days = 365;
  let weeks = 52;
  let months = 12;
  // Total no. of days,weeks,months for 90years
  let totaldays = 365 * 90;
  let totalweeks = 52 * 90;
  let totalmonths = 12 * 90;
  // Totals days,weeks,months lived    
  let liveddays = age * days;
  let livedweeks = age * weeks;
  let livedmonths = age * months;

  let willlivedays = totaldays - liveddays;
  let willliveweeks = totalweeks - livedweeks;
  let willlivemonths = totalmonths - livedmonths;

  console.log(`You have ${willlivedays} days, ${willliveweeks} weeks, and ${willlivemonths} months left.`)
}

lifeInWeeks();

// first class function: functions imside another function
//  |
//   ability to use as a value

let first_class_function = function () {
  return function xyz() {

  }
}
console.log(first_class_function());


let x = function () {
  return add(4, 4);
}
function add(a, b) {
  return a + b;
}
console.log(x(add()));

// note : first class functions,first class citizens are same;

// return : gives an returned value when we call the function
function getmilk(money) {
  return money % 1.5;
}
console.log(getmilk(4));

// BMI calculator
let height = window.prompt("Height : ");
let weight = window.prompt("Weight : ");
function bmi(height, weight) {
  let bmi = weight / (height * height); // bmi=weight/(height*height)
  return Math.floor(bmi);
}
console.log(bmi());

// Random number generation

let random_number = Math.round(Math.random() * 10);
let random_number1 = Math.round(Math.random() * 5);
let random_number2 = Math.round(Math.random() * 50);
console.log(random_number);
console.log(random_number1);
console.log(random_number2);

// task : Love Calculator
let your_name = prompt("enter ur name : ");
let lover_name = prompt("Enter ur Lover name : ");
function calculatelove() {
  let randomnum = Math.random() * 100;
  let realvalue = Math.floor(randomnum + 1);
  console.log(`The Love Between ${your_name} & ${lover_name} is ${realvalue}%`)

}
if (realvalue === 100) {
  console.log("100% love");
}
  
}
calculatelove();


------------------- Day1-----------------------
