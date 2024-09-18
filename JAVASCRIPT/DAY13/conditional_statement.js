// Conditional statements
// if-else
// nested if-else
// switch

let age=12;
if(age>=18){
  console.log("Can Marry");
}
else{
  console.log("U Need To Growup");
}

let username="abhi";
let password="Abhi123tech";
let user_input=window.prompt("Enter the name:");
let user_password=window.prompt("Enter your password");
if(user_input == username){
   if(user_password==password){
      console.log("Your are successfully login");
   }
   else{
     console.log("Enter the correct password");
   }
}
else{
   alert("please enter the valid details");
}

// Traffic light system
let color=prompt("Eneter the traffic color");
switch(color){
  case "red":
       console.log("STOP");
       break;
  case "yellow":
       console.log("Go Slow");
       break;
  case "green":
       console.log("Go");
       break;
  default:
       console.log("Enter Valid color");
}
