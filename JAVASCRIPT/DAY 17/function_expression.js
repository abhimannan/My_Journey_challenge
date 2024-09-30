// function expressions
let x=function(a,b){
 console.log("Function Expression");
 return a+b;
}
console.log(x(1,1));

let y=function(name){
  return name;
}
console.log(y("abhi"));

// Higher Order Function
// SYNTAX :-
// function HigherOfunction(multiplefunctions....,parameters){
//      // calling the functions and return;

// }

function higher_order_function(fun1,fun2,fun3){
    // for(let i=1;i<=n;i++){
    //     fun1();
    // }
   fun1();
   fun2();
   fun3();
}
let function1=function(){
   console.log("Function1");
}
let function2=function(){
 console.log("Function2");
}
let function3=function(){
 console.log("Function3");
}

higher_order_function(function1,function2,function3)

// Clear Example
function Higher_order_function1(f1,n){
    f1();// function calling
    console.log(n);
}
Higher_order_function1(()=>{console.log("abhi")},5);

// Higher order function with return 
