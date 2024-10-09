// Square and sum the array elements using the arrow function and then find the average of the array
let array=[1,2,3];
function Avg(array){
 console.log("Actual array =",array)
  let square=array.map((data)=>{
     return data**2;
  });
  console.log("square array =",square);
 let sum=square.reduce((res,ele)=>{
    return res+ele;
 });
 console.log("sum =",sum);
 let l=array.length;
 var avg=0;
 for(let i=0;i<l;i++){
    avg+=array[i];
 }
 console.log("Average =",avg/array.length);
}
Avg(array);
let marks=[98,95,97,93,95,99]
Avg(marks);

// Q. Create an new array using the map function whose each element is is equal to the element plus 5.
let nums=[10,12,25,14,32];
let original_elementy=5;
let x=nums.map((data)=>{
  return data+5;
});
console.log(`Original array ${nums}`);
console.log(`Filtered array ${x}`);
// Another logical question try
let y=nums.map((data)=>{
 if(original_elementy+5==data){
   return data;
 }
});
console.log(`Filtered array ${y}`);

//Q. create a new array whose elements are in uppercase of words present in the origin array
let family=["geetha","kumar","vijay","abhi"];
let upper=family.map((data)=>{
    return data.toUpperCase();
});
console.log("Actual array =",family);
console.log(upper);

//Q.  Write a function named as doubleAndReturnArgs which accepts an array and a
//    variable number of arguments.The function should return a new array with the original 
//    array values and all of the addtional arguments doubled
let arra=[10,20,30]
function doubleAndReturnArgs(arra,...args){
    console.log("Original array =",arra);
    let doubled=args.map((data)=>{
         return data+data;
    });
    console.log(doubled);
    console.log("Arguments =",args)
}
doubleAndReturnArgs(arra,1,2,3,4,9);

//Q. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all all the keys and values of the first object and second object 
let o1={
    name:"geetha",
    age:35
}
let o2={
    name:"kumar",
    age:40
}
function mergeObjects(obj1,obj2){
 let merge=[obj1,obj2];
 let obj={...merge};
 console.log(obj);
 
}
mergeObjects(o1,o2);
