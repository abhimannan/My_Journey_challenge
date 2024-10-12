let url="https://catfact.ninja/fact";
/*
let data=fetch(url);
// console.log(data);// promise
data.then((response)=>{
    let x=response.json();
    x.then((data)=>{
      console.log(data.fact);
    })
    return fetch(url);
})
.then((response)=>{
    let res=response.json();
    // console.log(res);
    res.then((data)=>{
      console.log(data.fact);
    }).catch((error)=>{
      console.log(error);
    });
    return fetch(url);
})
.then((response)=>{
  let res=response.json();
  res.then((data)=>{
     console.log(data.fact);
  }).catch((error)=>{
      console.log(error);
  })
})
.catch((Error)=>{
    console.log(Error);
    
});
*/
// The above same operation using the async,await
async function getData(){
 try{
   let res=await fetch(url);
   let data=await res.json();
   console.log(data.fact);
   
   let res2=await fetch(url);
   let data2=await res2.json();
   console.log(data2.fact);
 
  }
  catch(error){
     console.log("Error Is = ",error);
     
  }

}
