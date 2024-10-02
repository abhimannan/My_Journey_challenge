
// Destructuring
let names=["abhi","geetha","vijay"];
const [fname,mother]=names;
console.log(fname,mother);// abhi geetha

// object destructuring
let car={
  name:"Thar",
  color:"black",
  price:1500000,
  drive(){
     console.log("This is very comfortable to drive");
  },
  appearence(){
     console.log("it look so laxury");
  }
}
console.log(car);
// const {name,price,...rest}=car;// const {key1,key2,...keyn}=object_variable;
// console.log(name,price);
// console.log(rest);
// console.log(rest.color);
// console.log(rest.drive());
// console.log(rest.appearence());

const {name,color}=car;
console.log(name,color,city="abhi");// city is not in object but we can give by default\


