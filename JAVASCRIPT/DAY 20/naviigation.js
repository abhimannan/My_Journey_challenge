// Navigation
let parentx=document.querySelector("h4");
console.log(parentx.parentElement)

let childs=document.querySelector(".box");
console.log(childs.children);

let ul=document.querySelector(".box ul");
// console.log(ul);
console.log(ul.children[0].nextElementSibling);
console.log(ul.children[2].previousElementSibling);


