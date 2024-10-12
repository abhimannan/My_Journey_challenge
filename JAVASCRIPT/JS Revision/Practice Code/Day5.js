// type conversion
let name = "123";
let x = Number("121");
console.log(typeof (x));
let isstudent = Boolean("yes");
console.log(isstudent);
let marks = String(56);
console.log(typeof (marks));

// constants
console.log(Math.random() * 10);
console.log(Math.PI);
console.log(Math.round(125.83));
console.log(Math.floor(25.9));
console.log(Math.ceil(25.9));
console.log(Math.sqrt(45));
console.log(Math.pow(2, 2));

// // strings
let fname = "abhi";
let sname = "mannan";
console.log(fname + " " + sname);
let add = fname.concat(sname);
console.log(add);
console.log(fname.slice(0, 2));
console.log(fname.substr(0, 3));
console.log(fname.substring(0, 2));
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.startsWith("a"));
console.log(sname.endsWith("z"));
let y = "    xyz   name";
console.log(y.trimStart());
y.trimEnd();
let mother = "geetha";
console.log(mother.includes("g"));
console.log(mother.search("g"));
let replace = mother.replace("geetha", "vijay");
console.log(replace);
console.log(mother.charAt(0));

// // method chaining
// // Task : take a string,convert the first letter is capital
let sample = "aval";
let modify = sample.charAt(0).toUpperCase() + sample.slice(1, sample.length);
console.log(modify);


// // for loop
for (let i = 0; i <= 10; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}
// while loop
let i = 0;
while (i <= 5) {
   console.log(i);
   i++;
}

// break,continue
for (let x = 10; x >= 0; x--) {
   console.log(x);
   if (x === 5) {
      continue;
   }
}

// let vs var
// let is limited to the block    => Local variable
// var is limited to the function => Gobal variable

function start() {
   for (let i = 0; i <= 3; i++) {
      console.log(i);
   }
   console.log(i);  // function scoped "var" 
}
// in the above example "i" can be used with in the for loop "let" => block-scoped
// but if we declare "i" with var the we can access outside of the for loop  => function-scoped
start();

// Template literals    ``
let name = "guest";
console.log(`Welcome ${name}`);

// Arrays
let x = [1, 2, 3, 4, 5];
console.log(x);
x.push("xxx");
console.log(x);
x.pop(1);
console.log(x);
x.shift();
console.log(x);
x.unshift("xxx");
console.log(x);
console.log(x.slice(0, 3));
console.log(x.splice(2, 2, "s", "s"));
console.log(x);
let arr = ["a", "b", "c", "d"];
arr.reverse();
console.log(arr);

// spread operator
let fruits = ["apple", "orange", "babana"];
console.log(...fruits);

// Rest operator : when we dont't know how many no. of arguments will passes in the functiion call
let a = 10;
let b = 10;
let c = 10;
let d = 10;

function sum(...nums) {
   let total = 0;
   for (let num of nums) {
      total = total + num;
   }
   console.log(total);
}
sum(a, b, c);

// callback function
function fun1(callback) {
   console.log("this is function1");
   callback();
}
function add(a, b, callback) {
   let sum = a + b;

   callback(sum);
}
function fun2() {
   console.log("this is function2");
}
add(a, b, fun2());

// forEach(function),map(function),filter(function),reduce(function);
let marks = [45, 54, 55, 58];
marks.forEach(print);
function print(data) {
   let sum = [];
   sum.push(data);
   console.log(sum);
}

// map(callback)
let marks = [45, 54, 55, 58];
let x = marks.map(square); // map iterate all the elements and creates an new array
console.log(x);
x.forEach((element) => {   // filter is execute the provided callback function
   console.log(element);
});
function square(data) {
   return data;
}

// filter
let nums = [1, 45, 25, 35, 25, 0];
let y = nums.filter(callback);
y.forEach((result) => {
   return result;
});
function callback(data) {
   if (data < 10) {
      console.log(data);
   }
}

// reduce(callback)
callback(previous, nextvalue)
let sem = [1, 2, 30];
let sum = sem.reduce((prev, next) => {
   return prev + next;
});
console.log(sum);

// function statement : normal function
function display() {
   console.log("Function Statement");
}
display();

// function expression
let x = function xyz() {
   console.log("Function expression");
}
x();

// Arrow function
let username = window.prompt("Enter the name : ");
let name = (username) => {
   console.log(username);
}
name(username);

class player {
   name = "abhi";
   age = 20;
   play() {
      console.log("playing");
   }
}
const player1 = new player();
console.log(player1);

// constructor
class player {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}
let player1 = new player("abhi", 20);
console.log(player1);

class common {
   alive = true;
   sleep() {
      console.log("sleeping");
   };
   eat() {
      console.log("eating");
   };
   run() {
      console.log("running");
   }
}

class abhi extends common {
   name = "abhi";
   age = 20;
}
class geetha extends common {
   name = "geetha";
   age = 35;
}

class kumar extends common {
   name = "kumar";
   age = 40;
}
class vijay extends common {
   name = "vijay";
   age = 19;
}


let member1 = new vijay();
console.log(member1);
console.log(member1.sleep());
console.log(member1.eat());

let member2 = new geetha();
console.log(member2);
console.log(member2.run());

// super : user to refer the parent class

// parent class
class parent {
   constructor(name, marks) {
      this.name = name;
      this.marks = marks;
   };
   pause() {
      console.log("STOP");
   };
   start() {
      console.log("START");
   }
}
class child1 extends parent {
   constructor(name, marks) {
      super(name, marks);
   }
}

class child2 extends parent {
   constructor(name, marks) {
      super(name, marks);
   }
}

let obj = new child2("abhi", 65);
console.log(obj);
console.log(obj.pause());

// setTimeount(function,seconds);

function name() {
   console.log("Abhi");
}
let t1 = setTimeout(name, 3000);
function aval() {
   console.log("Aval");
}
let t2 = setTimeout(aval, 6000);

let date = new Date();
console.log(date.getFullYear());
console.log(date.getDay(1));
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());


// function to display the date
let date = new Date();
function today() {
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();
   console.log(`today = ${year} ${month} ${day}`);

}
today();

// synchronous vs asynchronous 
console.log("synchronous code");

setTimeout(() => {
   for (let i = 0; i <= 4; i++) {
      console.log(i);
   }
}, 3000);

// promises
let promise = new Promise((resolve, reject) => {
   let fileload = false;
   if (fileload) {
      resolve("FILE IS LOADED");
   }
   else {
      reject("FILE IS NOT LOADED");
   }
});
promise.then((data) => {
   console.log(data);
}).catch((error) => {
   console.log(error);
});

// reached or not  
let information = new Promise((resolve, reject) => {
   let reache = true;
   if (reache) {
      setTimeout(resolve, 3000, "Vidhya reached");
   }
   else {
      reject("Vidhya is not reached");
   }
});

information.then(succes).catch(failure);
function succes() {
   console.log("i will call u later");
}
function failure() {
   console.log("She was not reached");
}