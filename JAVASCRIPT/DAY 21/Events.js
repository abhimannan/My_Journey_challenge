// let button=document.querySelector("#btn").onclick=display;
function display(){
  alert("Clicked");
}

let btns=document.querySelectorAll(".btn1")
console.dir(btns);
/*
for(let i of btns){
i.onclick=function(){
    console.log("clicked");
}
i.ondblclick=function(){
  alert("dblclick event")
}
i.onmouseenter=function(){
    console.log("onmouseenter");
}
}
*/
// addEbventListener("event",callback);
/*
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
*/
// challenge logic
let x=document.querySelectorAll(".Generate");
console.log(x);

// x.addEventListener("click",function(){
//   document.body.style.backgroundColor="green";
// });

// const y = document.getElementByClassName("changeColorBtn");
    
// y.addEventListener("click", function() {
//   document.body.style.backgroundColor = "green";
// });





