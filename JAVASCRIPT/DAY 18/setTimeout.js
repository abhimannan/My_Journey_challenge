// setTimeout(function,seconds) : it invokes a function after some milli seconds

function name(){
  console.log("Abhi");
}
let id=setInterval(name,3000);
console.log(id);
clearInterval(id);
let my_name=()=>{
  console.log("Geetha")
}
let id2=setTimeout(my_name,2000);
console.log(id2);
clearTimeout(id2);

// Dates
let date=new Date();
// console.log(date.getSeconds());
function getSeconds(){
    console.log(date.getSeconds());
}
let s=setInterval(getSeconds,1000);;
