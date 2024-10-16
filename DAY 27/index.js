let app=require("express");

let server=app();
let port=3000;

// get the request
server.listen(port,()=>{
  console.log(`The server is running in port no. ${port}`);
});

// to give the response :rep.use((req,rep));
server.use((request,response)=>{
  console.log("Request was received");
  // response.send("Responded");
  // response.send({
  //   name:"geetha",// this object coverted into json file
  //   age:30
  // });
  response.send("<h1>Abhi</h1><ul><li>li</li><li>li</li></ul>");

})