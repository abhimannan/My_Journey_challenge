let input=document.querySelector("#task");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let ul=document.querySelector("ul");
        // create an li
        let li=document.createElement("li");
        li.innerText=input.value;
        // create an button
        let delbtn=document.createElement("button");
        delbtn.innerText="Delete";
        li.appendChild(delbtn);
        delbtn.classList.add("delete");

        ul.appendChild(li);
        input.value="";

});
// adding the delete functionality : concept :- event bubbling
let ul=document.querySelector("ul");
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
      let itemList=event.target.parentElement;
      itemList.remove();
   }
}
);


// let deleteBtns=document.querySelectorAll(".delete");
// console.log(deleteBtns);
// for(let button of deleteBtns){
//  button.addEventListener("click",function(){
//     let parent=button.parentElement;
//     parent.remove();
// })
// };



