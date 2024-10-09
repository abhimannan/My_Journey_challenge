// Event bubbling : event.stopPropagation();
let div=document.querySelector(".div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");

// adding eventListener for each of them
div.addEventListener("click",function(event){
 event.stopPropagation();
   console.log("Div was clicked!");
});

ul.addEventListener("click",function(event){
 console.log("ul was clicked!");
 event.stopPropagation();
});

li.addEventListener("click",function(event){
 console.log("li was clicked!");
 event.stopPropagation();
});
