// checkbox changes into clickable
document.getElementById("change").innerHTML = "abhi";
document.querySelector(".click").click();

// difference between properties,methods
// properties is what object has  
// method() is what the object can do
// in the above example innerHTML is a property
// the click() is the method

// Accessing the styles
document.getElementById("abhi").style.color = "red";
let btn = document.querySelector(".button");
btn.style.backgroundColor = "yellow";
console.log(btn);

// Accessing the attributes
let attribute = document.querySelector("a").getAttribute;
console.log(attribute);
document.querySelector("a").setAttribute("href", "www.facebook.com");

// EventListener("event",function(){-----})
let x = document.getElementById("abhi");
x.addEventListener("click", () => {
  alert("abhi");
});

x.addEventListener("click", handleclick);
x.addEventListener("mouseover", handleover);
x.addEventListener("mouseout", handleout);
function handleclick() {
  document.querySelector(".body").style.backgroundColor = "red";
}
function handleover() {
  document.querySelector(".body").style.backgroundColor = "yellow";
}
function handleout() {
  document.querySelector(".body").style.backgroundColor = "green";
}


// Higher order function
function add(a, b) {
  return a + b;

}
function mul(a, b) {
  return a * b;

}
function decide(a, b, operator) {
  return operator(a, b)
}
decide(2, 2, add());


// callback function : A function as an parameter
function callbck(abhi) {
  return console.log("this is function1");
  abhi();
}
function higherorder() {
  return console.log("this is function2");
}
higherorder(callbck());

// Task : to an array which has radius and find area
let radius = [5, 2, 4, 1, 4];
function circlearea() {
  var area = [];
  for (let i = 1; i <= radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);

  }
  return (area);
}
console.log(circlearea())

// switch statement
let choice = window.prompt("Enter the choice :");
switch (choice) {
  case "a":
    console.log("This is case1");
    break;
  case "b":
    console.log("This is case2");
    break;
  default:
    console.log("this is the default state");
}

// objects
let hotel = {
  name: "abhi",
  color: "red",
  owner: "abhi",
  start() {
    console.log("The hotel is open");
  },
  close() {
    console.log("The hotel is closed!sorry");
  }
}
console.log(hotel.name);
console.log(hotel.start());
console.log(hotel.close());

// Task : object for the houseKeeper1
var housekeeper1 = {
  name: "aval",
  age: "25",
  no_of_houses_work: 5,
  cleaning: "good",
  work() {
    console.log("She is working");
  },
  shift() {
    console.log("The work is completed");
  },
  langiuages: ["tamil", "teludu"]
}
console.log(housekeeper1.name);
console.log(housekeeper1.age);
console.log(housekeeper1.work());
console.log(housekeeper1.langiuages);

// Task : create the above object using constructor
class housekeeper {
  constructor(name, age, experience) {
    this.name = name,
      this.age = age,
      this.experience = experience,
      this.clean = function () {
        alert("cleaning in progress");
      }
  }
};


// // class is the base of the objects
// // We create 'n' number of objects using only the one class template

let housekeeper1 = new housekeeper("abhi", 20, "fresher");
let housekeeper2 = new housekeeper("geetha", 33, "2years");
let housekeeper3 = new housekeeper("vijay", 40, "5years");
let housekeeper4 = new housekeeper("kumar", 32, "8years");

console.log(housekeeper1.name);
console.log(housekeeper1.age);
console.log(housekeeper2.name);
console.log(housekeeper2.age);
console.log(housekeeper3.name);
console.log(housekeeper3.age);
console.log(housekeeper4.name);
console.log(housekeeper4.age);
console.log(housekeeper1.clean());

// document.eventListener
// in the below line addEventListener is the "HIGHER ORDER FUNCTION"
// The function passed as an parameter is called as "CALLBACK FUNCTION"
document.addEventListener("keypress", function (event) {
  if (event.key === "a") {
    var music = new Audio("sounds/snare.mp3");
    music.play();
  }
});

// displaying the keypress events
let xy = document.addEventListener("keypress", function (event) {
  console.log(event);
});
console.log(xy);

