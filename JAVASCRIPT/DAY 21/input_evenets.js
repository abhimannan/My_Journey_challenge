let form=document.querySelector("form");
// console.dir(form);
form.addEventListener("submit",function(event){
    event.preventDefault();
});

let data=document.querySelector("#data");
data.addEventListener("change",function(){
 console.log("change event");
 console.log("final result =",data.value);
 
});

// Activity : instantly change the input values
data.addEventListener("input",function(){
 // console.log("input event");
 // console.log("final result =",data.value);
 let result=document.querySelector("h3");
 let store_value=data.value;
 result.innerText=store_value;
});
























