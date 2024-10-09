// addEbventListener("event",callback);
let btns=document.querySelectorAll(".btn1")
console.dir(btns);

for(let i of btns){
 i.addEventListener("click",function(){
    console.log("clicked");
 });
 function changecolor(){
   i.style.backgroundColor="yellow";
 }
 i.addEventListener("dblclick",changecolor);
 i.addEventListener("mouseenter",function(){
     document.body.style.backgroundColor="red";
 });
 i.addEventListener("mouseover",function(){
  document.body.style.backgroundColor="red";
 });
 i.addEventListener("mouseout",function(){
  document.body.style.backgroundColor="yellow";
 });
 }
 