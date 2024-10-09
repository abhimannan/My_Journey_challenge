// ClassList : used to use the properties of the other class
let heading=document.querySelector("#head");
// console.log(heading);
console.log(heading.classList);
heading.classList.add("new-class");
// console.log(heading.classList);
// To remove the classList
heading.classList.remove("new-class");
// to add the classList
heading.classList.add("new-class");
// contain : particular class is present or not
let contain=heading.classList.contains("new-class");
console.log(contain);
// toggle : add or remove
// if the class name is exist the class is remove 
// if the class is not exist the add the class in the classList
heading.classList.toggle("new-class");
console.log(heading.classList)
heading.classList.toggle("xyz");
console.log(heading.classList);
heading.classList.toggle("ABHI");
console.log(heading.classList);
