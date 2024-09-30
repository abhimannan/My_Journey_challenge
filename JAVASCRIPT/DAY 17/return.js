function sum(a,b){
   return a+b;
   
}
sum(1,1);

// after the return statement nothing is executed

// Task : sum of all nums from 1 to n
function sum1ton(){
 let n=prompt("Enter n :");
 let sum=0;
   for(let i=1;i<=n;i++){
       sum+=i;
   }
   return sum;
}
console.log(sum1ton());
// array strings concatination
let string=["abhi","geetha","kumar","vijay"];
console.log(string);
function concat_array_strings(string){
     let result="";
     for(let i=0;i<string.length-1;i++){
        result+=string[i];

     }
     return result;
   }

   console.log(concat_array_strings(string));
