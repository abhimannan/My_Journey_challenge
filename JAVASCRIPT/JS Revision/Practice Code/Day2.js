// // Control Statements

// let track = false;
// if (track) {
//  console.log("The track is clear");
// }
// else {
//  console.log("The track is NOT clear");
// }

// // // +ve,-ve
// let num = 5;
// if (num > 0) {
//  console.log("the num is +ve");
// }
// else {
//  console.log("-ve number");
// }

// // // even or odd
// switch (num) {
//  case num === 0:
//   console.log("the number is 0");
//   break;
//  case num > 0:
//   console.log("the num is +ve");
//   break;
//  case num < 0:
//   console.log("the num ios -ve");
//   break;
//  default:
//   console.log("enter the valid num");

// }

// //  ==,===
// var x = 2;
// var y = "2";
// console.log(x == y);  // values compared
// console.log(x === y); // vcalues + datatypes are compared
// console.log(x = !y);
// console.log(x == !y)

// // logical operators &&,||,!
// if (x == y || x === y) {
//  console.log("both the conditions are satisfied");
// }
// else {
//  console.log("not satisfied");
// }

// let x = 15;
// if (x > 1) {
//  for (let i = 2; i <= x; i++) {
//   if (i % 2 !== 0) {
//    console.log(i);
//   }
//  }
// }
// // the given year is leap yar or not
// let year = 2024;
// if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
//  console.log(`${year} is leap year`);
// }
// else {
//  console.log("This is not leap year");
// }


// // another way of pragram for leap or not
// let year = 2024;
// if (year % 4 === 0) {
//  if (year % 100 === 0) {
//   if (year % 400 === 0) {
//    console.log(`${year} is leap year`);
//   } else {
//    console.log(`${year} is not leap year`);
//   }

//  } else {
//   console.log(`${year} is leap year`);
//  }

// } else {
//  console.log(`${year} is not leap year`);
// }

// Arrays
let names=["abhi","geetha","kumar","vijay"];
// Accessing array elements using their index
   console.log(names[2]);

let requiredname=window.prompt("Enter the name u required : ");
if(requiredname==="mother"){
  console.log(names[1]);
}
else if(requiredname==="father"){
  console.log(names[2]);
}
else if(requiredname==="brother"){
  console.log(names[3]);
}
else if(requiredname==="myname"){
  console.log(names[0]);
}

// Task :

let required=window.prompt("Enter the name to be chech : ");
if(names.includes(required)){
  console.log(`${required} Available in the array`);
}
else{
  console.log(`${required} Doesn't exists in the array`);
}

// Task : Write a pragram thats the numbers from 1 to 100.But for multiples of three print 
//        "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers
//         which are multiples of both three and five print "FizzBuzz";

//printing number sfrom 1 to 100
for(let i=1;i<=100;i++){
    // if i divisible by 3
    if(i%3===0){
          console.log("Fizz");
    }  
      // if i divisible by 5
      else if(i%5===0){
           console.log("Buzz");
       }
       else if(i%3===0 && i%5===0){
          console.log(i);
       }
       // if i is not divisible by 3,5   
       if(i%3===0 && i%5===0){
            console.log("FizzBuss");
       }
      else if(i%3!==0 && i%5!==0){
           console.log(i);
       }
}

// Another Method To Solve The Above Task   ==> Using WhileLoop
var arr=[];    // take an empty array
var count=0;   // take the temporary count variable
function add(){   // function
  while(count<=100){  // while loop is continuously executed untill the condion is false
  
     if(count%3===0){
       arr.push("Fizz");   // insert an value into the arr  []
     }
     else if(count%5==0){
       arr.push("Buzz");
     }
     else if(count%3==0 && count%5==0){ // if the both the conditions satisfied
       arr.push("FizzBuzz");
     }
     else{
        arr.push(count);   // if nothing matches then just print the count value
    }  
      count++;  // increment the count value by 1 after every interation
     }
     console.log(arr);   // print the array
   }
add();   // calling the function

// Solving the above problem using ForLoop
// The problem in the while loop is it may be turn into the "INFINITE LOOP"
var arr=[];    // take an empty array 
function add(){   // function
  for(let count=1;count<=100;count++){  // for loop
  
     if(count%3===0){
       arr.push("Fizz");   // insert an value into the arr  []
     }
     else if(count%5==0){
       arr.push("Buzz");
     }
     else if(count%3==0 && count%5==0){ // if the both the conditions satisfied
       arr.push("FizzBuzz");
     }
     else{
        arr.push(count);   // if nothing matches then just print the count value
    }  
     }
     console.log(arr);   // print the array
   }
  
add();   // calling the function

// THIS CODE I'M CAN'T ABEL TO SOLVE IN FUTUTE I WILL SOLVE
// var bottles=99;
// function display(){
//   while(bottles>=0){
//       console.log(`${bottles} of the beer on the wall,${bottles} bottles of beer.Take one down and pass it.${bottles-1} bottles of beer on the wall`);
//   }
//   bottles--;

// }
// display();


