let express = require("express");
let app = express();

app.use()

app.get("/home",(req,resp)=>{
    resp.send("home route");
});

app.listen(5252,()=>{
    console.log("practicing middleware");
});
