function saveDB(data){
   return new Promise((resolve,reject)=>{
      let internet=Math.floor(Math.random()*10)+1;
      if(internet>4){
          resolve("DONE!");// result
      }
      else{
        reject("ERROR");// error
      }
   })};

  saveDB("Apna College")
  .then(()=>{
  console.log("Saved Data1");
  return saveDB("another data");
})
.then((result)=>{
   console.log("Data2 Saved",result);
   return saveDB("data3");
})
.then((result)=>{
    console.log("Data3 was saved",result);
})
.catch((error)=>{
    console.log("Error is :",error);
});



