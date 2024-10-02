// Rest : takes nukmber of args and creates an array
function sum(...args){
  return args.reduce((res,ele)=>{
    res+ele;
  })
};
console.log(sum(1,1));

function value(...ars){// ars=[parameters...]
  for(let i=0;i<ars.length;i++){
     console.log(ars[i]);
     
  }
}
console.log(value(90,89,78));

// own logic building
let a=parseFloat(window.prompt("Enter a value"));
let b=parseFloat(window.prompt("Enter b value"));
let c=parseFloat(window.prompt("Enter c value"));
let d=parseFloat(window.prompt("Enter d value"))
function square(...arguments){
    return arguments.reduce((res,ele)=>{
       res+ele;
    });
}
square(a,b,c,d);
