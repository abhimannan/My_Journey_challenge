let express = require("express");
let app = express();
let port = 4141;


app.get("/home",(req,resp)=>{
    resp.send("Home route");
});

app.get("/listings",(req,resp)=>{
    
})

app.listen(port,()=>{
    console.log(`The server is running at ${port} port`);
});
