// Write an arrow function named as arrayAvg that accepts an array of numbers and return the AVG of those numbers
/*
let numbers=[10,45,12,47,36];
let arrayAverage=(numbers)=>{
   let avg=0;
   for(let i=0;i<numbers.length;i++){
       avg+=numbers[i]/numbers.length;       
   }
   console.log(avg);
}
arrayAverage(numbers);
*/

// Arrow function names as isEven() that takes a single number as an argument and return if it is even or not
/*
let chek_num=prompt("Enter a number to check even or not");
let isEven=(chek_num)=>{
    if(chek_num%2==0){
        console.log(`${chek_num} is Even`);
    }
    else{
        console.log(`${chek_num} is not Even`);
    }
}
isEven(chek_num);
*/

// output prediction
/*
let object ={
   message:'Hello,World!',
   logMessage(){
       console.log(this.message);
   }
}
setTimeout(object.logMessage,2000);
*/

// output prediction
let length=4;
function callback(){
   console.log(this.length);
}
const object = {
  length:5,
  method(callback){
    callback();
  }
};
object.method(callback,1,2);
