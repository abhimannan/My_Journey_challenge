let sum=10;  // it is the global scope
function fun_scope(){
   let sum=45;// function scope
   console.log(sum);
  }
  fun_scope();
console.log(sum);

// block scope : we can access with in the block
for(let i=1;i<=5;i++){
   console.log(i);
   // i we can we with in the {}curley braces
   // we can't use outside of the block
}
// console.log(i);// we can't use "i" here because of "i" is an block scope

// Lexical Scope : used in inside the nested functions
function outer_function(){
  let x=10;
  let y=20;
  function inner_function(){
      console.log(x);// LEXICAL SCOPE
  }
inner_function();
}
   
