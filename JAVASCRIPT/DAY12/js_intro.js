// // Output in js
// console.log("Abhi Mannan");
// // User Input
// let name=window.prompt("Enter Your Name:");
// console.log(name);

// Variables : Which stores value
let val1=10;
let val2=10;
let add=val1+val2;
console.log(add);

// let is a function scoped
// we can't access the variables outside of the block
// {
//  let age=10;
//  console.log(age);
// }
// console.log(age);

// Datatypes   :
// primitive : number,string,boolean,null,undefined
// non-primitive : Arrays,objects

let x=10;
let name="abhi";
let subscribe=true;
let age=null;
let xy;
console.log(typeof(xy));
let marks=[56,78,56,89];
let student = {
  name:"abhi",
  age:20,
  year:2024
}
console.log(typeof(marks));

// Operators
// arithematic,comparision,logical
// bitwise,assignment,unary operators

// NAN
let a=10;
console.log(isNaN(a));
let addname="abhi" + 1;
console.log(isNaN(addname));

// practice questions on NaN

// console.log(0/0);
// console.log(10/0);
// console.log("abhi"*10);

// let str="string";
// let num=1;
// console.log(str*num);

let fruit="apple";
console.log(typeof(fruit));
let v=Number(fruit);
console.log(typeof(v));
console.log(v);

let array=[10,12,"n1","n2",true,false];
array.forEach((value)=>{
    if(isNaN(value)){
       console.log("NaN's :",value)
    }
    else{
       console.log("number :",value);
    }
});
  
console.log(NaN===NaN)  //False



