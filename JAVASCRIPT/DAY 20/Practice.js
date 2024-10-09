// console.log("Practice");

let select=document.querySelector(".container");
let p=document.createElement("p");
p.innerHTML="Hey! I'm Red";
p.style.backgroundColor="red";
p.style.color="white";
p.style.padding="20px";
p.style.fontSize="25px";
// console.log(p);
select.append(p);

let h3=document.createElement("h3");
h3.innerHTML="I'm a Blue Color";
h3.style.color="blue";
h3.style.fontSize="25px";
h3.style.padding="20px";
select.append(h3);

let div=document.createElement("div");
select.append(div);
div.style.borderColor="black";
div.style.borderWidth="10px";
div.style.borderStyle="solid";
div.style.padding="15px";
div.style.borderRadius="15px"
div.style.backgroundColor="pink"
let addh1=document.createElement("h1");
addh1.innerHTML="I'm in the div section";
div.append(addh1)
let addp=document.createElement("p")
addp.innerHTML="ME TOO";
div.append(addp);
