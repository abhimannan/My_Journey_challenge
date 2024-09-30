// 1. finding larger number in an array
let array=[100,2,512,2000];
// console.log(array);
for(let i=0;i<array.length;i++){
   // console.log(array[i]);
     let l=[];
     if(array[i]>array[i+1]){
        l.push(array[i]);
        console.log(l);
     }
}
//  function to count the no. of vowels in string
function vowel_count(string){
     for(let i=0;i<string.length;i++){
      let count=0;
        if(string[i]=="a"|| string[i]=="e"|| string[i]=="i"|| string[i]=="o"|| string[i]=="u"){
            count=count+1;
            console.log(count);
        }
     }
}
vowel_count("aeiou");

//  function to print random nums from start,end given values
// let start=prompt("Enter starting value :");
// let end=prompt("Enter ending value :");
function random_nums(startx,endy){
     let diff=endy-startx;
     let x= Math.floor(Math.random()*diff)+startx;
     console.log(x);
   
}
// random_nums(start,end);

// let num=Math.floor(Math.random()*100)+100;
// console.log(num);

// romoving duplicate charecters
// let str="aabbcc";
// for(let i=0;i<str.length;i++){
//     console.log(str);
//     if(str.includes);
// }

// array contains country list display which country is the longest
let country=["Austrlia","Germany","india","britin","United States Of America"];
function longest_country(country){
       for(let names of country){
           country_length=names.length;
           if(country_length>country_length[names]){
                 c
           }
       }
}
longest_country(country);

// array given task is to display the larger than the given number
let a=[10,20,30,40,50,60];
let n=20;
function getElement(a,n){
for(let i=0;i<a.length;i++){
//     console.log(a[i]);
    if(a[i]>n){
       console.log(a[i]);
    } 
}
}
getElement(a,n);
// let c=a.filter((data,n)=>{
//      // let arr=[];
//       if(data>n){
//            console.log(data);
//       }
// });





