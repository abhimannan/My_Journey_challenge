//Q. Crete a new input and button element on the page using only the javascript only.
//   set the button to "Click Me!";
let select=document.querySelector("div");
// console.log(select);
let create_input=document.createElement("input");
let btn=document.createElement("button");
btn.innerHTML="Click Me!";
select.append(create_input);
select.append(btn);
// Q.Change placeholder value of input to "username"
//   Change the id of button to "btn"
create_input.placeholder="username";
btn.id="button";
console.log(create_input.placeholder);
console.dir(btn.id);

//Q.Access the btn using the querySelector and button id.
//  change the button background color to blue and text color to white
btn.style.backgroundColor="blue";
btn.style.color="white";

//Q.Create an h1 element on the page and set its text to "DOM practice" underlined.
//  Change its color to purple
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.style.color="purple";
h1.style.backgroundColor="orange"
select.append(h1);
//Q.Create a p tag on the page and set its text to "Apna College Delta Practice",
//  where Delta is bold
let tag=document.createElement("h2");
tag.innerHTML="Apna College Delta Practice";
tag.style.color="green";
select.append(tag);





