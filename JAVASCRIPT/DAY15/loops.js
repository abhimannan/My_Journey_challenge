// Loops

// for loop
// for(let i=1;i<=5;i++){
//   console.log(i);
// }
// odd numbers
// let num=window.prompt("Enter the num:");
// for(let i=num;i>=1;i--){// for(let i=1;i<=num;i=i+2)
//     if(i%2!==0){
//        console.log(i);
//     }
// }
// even nums from n1 to n2
// let n1=window.prompt("Enter n1 :");
// let n2=window.prompt("Enter n2 :");
// n1=parseInt(n1);
// n2=parseInt(n2);
// for(let i=n1;i<=n2;i++){
//   if(i%2==0){
//       console.log(i);
//   }
// }
// Print the multiplication table for 5
// for(let i=5;i<=50;i++){
//    if(i%5==0){
//       console.log(i);
//    }
// }

// printing the table of given number
// let n=prompt("Enter num :");
// n=parseInt(n);// or n=Number(n);
// for(let i=n;i<=n*10;i=i+n){
//   console.log(i);
// }

/*
// convert from one to another datatype
//parseInt("numbers");
let n=prompt("Enter n :");
console.log("n is",typeof(n));
// convert the above "n" value from string to integer
n=parseInt(n);
console.log("After datatype changes n is :",typeof(n));
*/

// Nested Lopps
// for(let i=0;i<=3;i++){
//   for(let j=0;j<=3;j++){
//     console.log(j);
//   }
// }

// While loop
// let i=1;
// while(i<=6){
//   console.log(i);
//   i++;
// }

// Favorite Movie
let favorite_movie="Avatar";
while(favorite_movie){
  let input_movie=prompt("Enter movie :");
  if(favorite_movie==input_movie){
   console.log("Correct movie"); 
   break;
  }
}