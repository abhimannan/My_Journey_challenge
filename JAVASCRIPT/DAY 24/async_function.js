// async function
// async function greet(){
//    throw "404 page was not found";
//    return "abhi";
//   }
// greet().then(success).catch(failure);
// function success(result){
//  console.log(result);
//   console.log("yes");
// }
// function failure(e){
//   console.log("The Error is :",e)
// }

// await
// async function fileload(){
//   let file_load=false;
//   return new Promise((resolve,reject)=>{
//    if(file_load){
//     resolve("File Was Loaded");
//  }
//  else{
//       reject("File Not Loaded");
//  }
//   })
// }
// fileload().then((result)=>{
//   console.log("Loaded");
//   console.log(result);
// })
// .catch((error)=>{
//   console.log("Not Loaded");
//   console.log("The Error Is :",error);   
// });
//await 
function display(){
  return new Promise((resolve,reject)=>{
  
setTimeout(()=>{
   let num=Math.floor(Math.random()*10)+1;
    console.log(num);
    resolve();
  },2000)
  })
}
async function demo(){
  await display();
  await display();
  await display();
}



