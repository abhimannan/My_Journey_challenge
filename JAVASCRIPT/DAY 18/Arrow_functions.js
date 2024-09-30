// Arrow Function

// Normal function
/*function add(a,b){
  return a+b;
}
let addition=add(2,2);
console.log(addition);
*/

let a=(a,b)=>{
  return a+b;
}
console.log(a(1,1));

let cube=(n)=>{
  return n*n*n;
}
cube(2);

// Implicit return statement
const mul=(a,b)=>(a*b);
console.log(mul(2,5));