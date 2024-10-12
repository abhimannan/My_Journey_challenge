// promise();
/*
let book_ticket=new Promise((resolve,reject)=>{
    let book=false;
    if(book){
       resolve("ticket was booked");
    }
    else{
        reject("Not booked");
    }
});
book_ticket.then(()=>{
  console.log("yes");
}).catch(()=>{
  console.log("NO");
});

// file loeaded
let file_load=new Promise((resolve,reject)=>{
  let file=true;
  if(file){
    resolve("File was loaded");
  }
  else{
     reject("Not Loeaded");
  }
});
file_load.then(()=>{
    console.log("Yes");
}).catch((e)=>{
    console.log(e);
});
*/
/*
function internet(data,success,failure){
   let internet=Math.floor(Math.random()*10)+1;
  //  console.log(internet);
  if(internet>4){
    success();
  }
  else{
    failure();
  }
}
internet("Apna college",()=>{
    console.log("Data Saved");
},
()=>{
  alert("Weak Internet");
}
);*/
// implementing the above program using promise;
let promise=new Promise((resolve,reject)=>{
    let internet=Math.floor(Math.random()*10)+1;
    if(internet>4){
      resolve();
    }
    else{
       reject();
    }
});
// promise.then(callback_function).catch(callback_function);
promise.then(success).catch(failure);
function success(){
   console.log("Data was saved");
   console.log(promise);// Object
}
function failure(){
   alert("Low Internet Connection");
}

