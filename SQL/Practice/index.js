let express=require("express");
let app=express();
let port=2020;
let path=require("path");
const { faker } = require('@faker-js/faker');

// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//creating a function for fake data generation
function createRandomUser() {
 return [
   faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
 ];
}
// console.log(createRandomUser());// reference

// Get the client
const mysql = require('mysql2');
const { connect } = require("http2");
// Create the connection to database
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 database: 'delta',
 password:"geetha143abhi"
});
// Add Data into The database
let data=[];
for(let i=0;i<=5;i++){
  data.push(createRandomUser());
}
// console.log(data);  Reference
let q=`insert into student values ?`;
try{
connection.query(q,[data],(err,results)=>{
   if(err) throw err;
   console.log(`The Data Has Been Successfully Inserted!`);
   console.log(results);  
});
}
catch(e){
   console.log(e);
}
// Users details route
app.get("/users",(req,resp)=>{
    let q=`select * from student`;
try{
   connection.query(q,(err,results)=>{
       if(err) throw err;
       console.log(results);
      resp.render("users.ejs",{results});
   });
}
catch(e){
    console.log(e);
}
});

// Show Route
app.get("/users/show/:id",(req,resp)=>{
   let {id}=req.params;
   let q=`select * from student where id='${id}'`;
   try{
       connection.query(q,(err,results)=>{
          if(err) throw err;
         //  console.log(results);
         resp.render("show.ejs",{results});
       });       
   }
   catch(e){
      console.log(e);
   }
});

// Edit Route
app.get("/users/edit/:id",(req,resp)=>{
   let {id}=req.params;
   let q=`select * from student where id='${id}'`;
   try{
       connection.query(q,(err,results)=>{
          if(err) throw err;
          let data=results[0];
         resp.render("edit.ejs",{data});
       });       
   }
   catch(e){
      console.log(e);
   }
});
// PATCH Request
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.patch("/users/edit",(req,resp)=>{
    let {id,username,email,password}=req.body;
    q=`update student set username='${username}',
             eamil='${email}',password='${password}'
             where id='${id}'`;
   try{
       connection.query(q,(err,results)=>{
          if(err) throw err;
          resp.redirect("/users");
       });
   }
   catch(e){
       console.log(e);
  }
});
// Delete the post
app.delete("/users/delete/:id",(req,resp)=>{
   let {id} = req.params;
   let q=`delete from student where id=?`;
   try{
      connection.query(q,[id],(err,results)=>{
          if(err) throw err;
          resp.redirect("http://localhost:2020/users");
      });
   }
   catch(e){
       console.log(e);
   }
});

// Create New User
let uuid=require("uuid4");

// Generate a new UUID

app.get("/users/new",(req,resp)=>{
   var id = uuid();
   resp.render("new.ejs",{id});    
});
app.post("/users/add",(req,resp)=>{
    let {id,name,email,password}=req.body;
    let q=`insert into student(id,username,eamil,password) values(?,?,?,?)`;
    try{
    connection.query(q,[id,name,email,password],(err,results)=>{
       if(err) throw err;
       resp.redirect("http://localhost:2020/users");
    });
   }
   catch(e){
       console.log(e);
   }
});

app.get("*",(req,resp)=>{
   resp.send(`The Page Was Not Found!`);
});

app.listen(port,()=>{
  console.log(`The Server is Running on Port ${port}`)
});