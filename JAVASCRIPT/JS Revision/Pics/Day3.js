// for loop : for iteration

// for(let i=1;i<=10;i++){
//    console.log("for loop");
// }
// i=1  ,i<=10 -->forloop
// i++   ,1++  -->for loop

// Fibonocci series



// DOM
// Accesing the css
function submit(){
 let x=document.getElementById("abhi");
 x.innerHTML="ABHI";
 x.style.color="green";
 x.style.margin="50px";
 x.style.width="150px";
 x.style.height="150px";
 x.style.backgroundColor="red";
}
submit();


var x= document.getElementById("abhi");
   document.getElementById("click").onclick(()=>{
        x.textContent="ABHI";
   });

// DOM is an object
// Accessing the tags of the html document like 
//                                 head,title,body,button,...

console.log(document);
document.title="title accessing";
document.body.style.backgroundColor="yellow";

// selecting the tags using tagnames
let x=document.getElementsByTagName("h1");
console.log(x);
// selecting the tags using id
let id=document.getElementById("abhi");
console.log(id);
// by class name
var class_name=document.getElementsByClassName("btn");
console.log(class_name);
// // QuerySelector 
let queryselect=document.querySelector("#abhi");
console.log(queryselect);




// Events onclick(function),onmouseover(function),onmouseout();
let btn=document.querySelector("#abhi");
function submit(){
   btn.style.color="red";
}
function change(){
   btn.style.backgroundColor="yellow";
}
function over(){
   document.body.style.backgroundColor="green";
}
