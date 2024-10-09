// Random color generator;
let btn=document.querySelector(".button");
btn.addEventListener("click",function(){
   let h1=document.querySelector("h1");
   let color=randomColor();
   h1.innerHTML=color;
   let div=document.querySelector("div");
   div.style.backgroundColor=color;
});
function randomColor(){
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
  return `rgb(${red},${green},${blue})`;//rgb(255,124,214)
}

