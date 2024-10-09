let btn=document.querySelector("button");

// btn.addEventListener("click",function(evenet){
//     console.log(evenet);
// });
// keyboard events : keydown,keyup.keypress
let input=document.querySelector("input");
input.addEventListener("keyup",function(event){
 console.log(event);
 // console.log("key =",event.key);
 console.log("code =",event.code);                           
//  console.log("key is pressed!");
   
   // charecter directions logic using evenet.code
   if(event.code=="ArrowUp"){
       console.log("Charecter Moves Forward");
   }
   else if(event.code=="ArrowDown"){
    console.log("Charecter Moves Backword");
   }
   else if(event.code=="ArrowLeft"){
    console.log("Charecter Moves Left Side");
   }
   else if(event.code=="ArrowRight"){
    console.log("Character Moves Right Direction");
   }
   else{
     console.log("Press The Arrow buttons On The Keyboard");
   }
   // challenge : write the same code using "key"
});

