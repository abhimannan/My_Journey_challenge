//Q. practice eventListener : mouseout,keypress,scroll,load 
/*
// mouseover,mouseout
let div=document.querySelector(".div-section");
div.addEventListener("mouseout",function(){
    alert("mouseout");
});
// keypress
let input=document.querySelector("input");
input.addEventListener("keypress",function(){
 console.log("keypress");
});
// scroll evenetListener
window.addEventListener("scroll",function(){
  console.log("Scrolled");
});
// load eventListener
window.addEventListener("load",function(){
 console.log("load eventListener");
});
*/

//Q. creating button using javascript.Add an eventListener to the button 
// that changes the button's color to green when it is clicked
let btn=document.createElement("button");
// console.log(btn);
btn.textContent="Click Me!";
// console.log(btn);
let ele=document.querySelector(".div");
ele.append(btn);
btn.classList.add("style");
// add eventListener
btn.addEventListener("click",function(){
     btn.style.backgroundColor="black";
     btn.style.color="white";
});

// Q.create an input field and when user enters input then the values
//   instantantly print the values below
let user=document.querySelector("#user");
user.addEventListener("input",function(event){
  console.dir(event.target.value);
  let res=document.querySelector("#result");
  let input=event.target.value;
  res.innerText=input;
});










