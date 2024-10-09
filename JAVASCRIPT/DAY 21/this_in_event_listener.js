let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//   console.log(this);
//   console.log(this.innerText);
//   console.dir(this);
//   this.style.backgroundColor="red";
//   this.style.color="white";
// });
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");
// adding the same above logic for the above selected elements
// h1.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="yellow";
// });
// h3.addEventListener("click",function(){
//  console.log(this.innerText);
//  this.style.backgroundColor="brown";
// });
// p.addEventListener("click",function(){
//  console.log(this.innerText);
//  this.style.backgroundColor="violet";
// });

// in the above example we have been used same code many times
// to reduce the code we can use "this" in event Listener
function changeColor(){
  console.log(this.innerText);
  this.style.color="white";
  this.style.backgroundColor="red";
}
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
// Note : if we have same lines of code then we can avoid using those lines
//        multiple time by use of "this" in eventListener("event",callback);


