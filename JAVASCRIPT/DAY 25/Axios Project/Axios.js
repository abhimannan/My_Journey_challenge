// Axios : used to end the http request
let h1=document.querySelector("h1");
let result=document.querySelector("#result");
let btn=document.querySelector("button");
// console.log(h1,result,btn);
let url="https://catfact.ninja/fact";
async function getJoke(){
 try{
  let response=await axios.get(url);
  let joke=response.data.fact;
  result.innerHTML=joke;
}
catch(e){
  console.log(e);
}
}
btn.addEventListener("click",async function(){
     await getJoke();
});
let dog_url="https://dog.ceo/api/breed/husky/images/random";

async function getDogData(){
 try{
  let img=document.querySelector("#image");
 let dogs_data=await axios.get(dog_url);
 let dog_image=dogs_data.data.message;
 // let get_attr=img.getAttribute("src");
 img.setAttribute("src",dog_image);
 let display_url=document.querySelector("#image_url");
 display_url.textContent=dog_image;
 }
 catch(e){
     console.log("Errer",e);
 }
}
let dob_btn=document.querySelector("#image_btn");
dob_btn.addEventListener("click",async ()=>{
   getDogData();
});




















