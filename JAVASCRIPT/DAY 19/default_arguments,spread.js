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
