// Own Example
let go_work=new Promise((resolve,reject)=>{
  let went_work=true;
  if(went_work){
     resolve("Went For Work!");// result statement
  }
  else{
     reject("No Work!"); // Error Statement
  }
});
go_work.then((result)=>{
 console.log(result);
  console.log("Problem1 was Solved");
  return go_work;
})
.then((result)=>{ // result is the default argument
   console.log(result);
   console.log("Problem2 was solved!");
   return go_work;
})
.then((result)=>{
    console.log(result);
    console.log("Problem3 Was Solved!");
})
.catch((error)=>{// error is the default argument
 console.log(error);
  console.log("Lots Of Problem");
});
