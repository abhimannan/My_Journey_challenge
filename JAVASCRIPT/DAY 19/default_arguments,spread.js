// default arguments
function sum(a,b=2){
     return a+b;
}
let s=sum();// 4
console.log(s);

// example
let arr=["abhi","geetha","vijay","kumar"];
console.log(...arr);
// destructuring
const [me,mother,brother,father]=arr;
console.log(me,mother,brother,father);
let r=[1,2,3,4,5];
const [one,two,...rest]=r;// rest holds arr
console.log(one,two);
console.log(rest)


// Spread with arrays
let arr=[1,2,3,4,5];
console.log(...arr);
let chars=[..."geetha"];
console.log(chars);

let even=[2,4,6,8];
let odd=[1,3,5,7,9];
let add_array=[...even,...odd];
console.log(add_array);

// spread with objects
const obj={
   name:"Ramesh",
   age:20
};
console.log({...obj,roll:90,email:"abhi123"});

// converting array into objects
let array=[1,2,3,4,5];
let convert={...array};
console.log(convert);

let object={..."Abhi"};
console.log(object);
