// console.log(window);
// console.dir(window);
let obj={
 name:"geetha",
 job:"Front-end Developer",
 experience:"5years",
 age:35
}
// console.log(obj);
// console.dir(obj);
console.log(document.all);// String representation
console.dir(document.all);
console.dir(document.all[8].innerHTML="Peter Parker");

// document.getElementbyId("id");
document.getElementById("h2").innerHTML="About Spiderman";

// select by class
// document.getElementByClassName("iron-man").innerHTML="Iron-Man : My Favorite";

let image=document.getElementById("mainImg");
// console.dir(image.src);
image.src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg";

// getElementByClassname("class");
// let old_images=document.getElementsByClassName("images");
// console.log(old_images)


let old_images = document.getElementsByClassName("oldImg");
console.log(old_images);
old_images.innerHTML="c:\Users\SNEHA\AppData\Local\Temp\Temp3_assets-20241005T023844Z-001.zip\assets\spiderman_img.png"
// console.log(old_images[2]);

for(let i=0;i<old_images.length;i++){
  old_images[i].src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg";
  console.log(old_images[i]);
 }

// tagname
let tag_name=document.getElementsByTagName("h4");
console.dir(tag_name);
tag_name[0].innerHTML="Abhi";

//querySelector("id or class or tagname")
let h1=document.querySelectorAll("h1");
console.log(h1);

let id=document.querySelector("#description").style.backgroundColor="yellow";
console.log(id);

let classx=document.querySelector(".abhi-para");
console.log(classx);

let p=document.querySelectorAll("p");
// p.style.backgroundColor="red";
for(let i=0;i<p.length;i++){
  p[i].style.color="green";
}
// NOTE :- if the document return an nodelist then we use their index to manipulate the value

// let innerText=document.querySelector("h1").textContent;
// console.log("innerText",innerText);

// innerHTML,innerText,textContent
// innerText:all content
let c=document.querySelector(".abhi-para").textContent;
console.log(c);
// innerHTML:shows the markup
let c1=document.querySelector(".abhi-para").textContent;
console.log(c1);
// textContent : show's the hidden element
let c2=document.querySelector(".abhi-para").textContent;
console.log(c2);

// Manipulating Attributes
let get_attr=document.getElementById("mainImg");
console.log(get_attr);
console.log("Src = ",get_attr.getAttribute("src"));
console.log("id=",get_attr.getAttribute("id"));
// change the attribute
// let u=get_attr.setAttribute("id","Geetha");
// console.log(get_attr);
// change the value
// let change=get_attr.setAttribute("class","class");
// console.log(get_attr);

// let changex=get_attr.setAttribute("class","another-class");
// console.log(get_attr);

// display all the attributes that has the tag
// let attributes=get_attr.attributes;
// console.log(`Attributes Names ${attributes}`);

document.querySelector(".style").style.backgroundColor="red";
document.querySelector(".box").style.backgroundColor="black";
document.querySelector(".box").style.color="white";

let links=document.querySelectorAll(".box a");
console.dir(links);
// Note : Whenever we are get an NodeList then we have to use for loop to manipulation
// for(let i=0;i<links.length;i++){
//   links[i].style.backgroundColor="orange";
//   links[i].style.color="red";

// }

// for of
for(let i of links){
  i.style.backgroundColor="red";
  i.style.color="white";
}


