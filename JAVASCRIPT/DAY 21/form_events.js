let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    //console.log("Form Submitted!");
    alert("Form Successfully Submitted!")
    event.preventDefault();// cancel the default action
    // extracting data
    // let name=document.querySelector("#name");
    // let pass=document.querySelector("#password")
    // another ways of target form.elements
    console.dir(form);// form.elements
    let name=this.elements[0];// form.elements[0]
    let pass=this.elements[1];// form.elements[1]
    // console.log(input);
    let user=name.value;
    let password=pass.value;
       //console.dir(name);// "value" property
    // display the name in the h1
    let display_user=document.querySelector("#user");
    display_user.innerText=user;
    let display_pass=document.querySelector("#pass");
    display_pass.innerText=password;
    console.log(user);
    console.log(password);
});

