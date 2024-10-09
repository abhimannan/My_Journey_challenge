console.log(window);;
console.dir(window);
console.log(document);// object

document.getElementsByClassName("name").innerHTML="xxx";
document.body.style.backgroundColor="red";

document.getElementById("para").innerHTML="This is paragrapg change by Id";
document.getElementsByTagName("h3").innerHTML="Geetha";
let tag=document.getElementsByClassName("tag");
// console.log(tag);
tag.innerHTML="Geetha";

let y=document.querySelector(".tag").innerHtml="QUERY SELECTOR";
console.log(y);

document.getElementById("id").innerHTML="Abhi mannan";
