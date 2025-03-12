const express = require("express");
let app = express();
let port = 5050;

app.use((req,resp)=>{
     console.log(`request sent!`);
});

app.listen(port,(req,resp)=>{
     console.log(`The Server is Running At Port No. ${port}`);
});
