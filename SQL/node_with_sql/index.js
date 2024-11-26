let express=require("express");
let app=express();
let port=9090;
let path=require("path");
const { faker } = require('@faker-js/faker');
// below package is for delete the posts
var methodOverride = require('method-override');
// Get the client
const mysql = require('mysql2');

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta',
  password: "geetha143abhi"
});
// generate the random array
function getdata() {
  return [
   faker.string.uuid(),
   faker.internet.username(), // before version 9.1.0, use userName()
   faker.internet.email(),
   faker.internet.password(),
  ];
 };
// A simple INSERT query
/*let q = `INSERT INTO student VALUES ?`;
let data=[];
for(let i=0;i<2;i++){
  data.push(getdata());
}*/
// let user=["1254", "abhi", "abhi@gmail.com", "1431"];
// let users = [
//   ["1254", "abhi", "abhi@gmail.com", "1431"],
//   ["1235", "abhi", "abhi@gmail.com", "148931"]
// ];
// let users2 = [
//   ["9652", "vijay", "vijay@gmail.com", "14511"],
//   ["2356", "kumar", "kuar@gmail.com", "98565"]
// ];


// Execute the query
// connection.query(
//   q,[data],
//   function (err, results) {
//     if (err) {
//       console.error("Error executing query:", err);
//     } else {
//       // console.log("Results:", results);
//     }
//     // Close the connection after the query
//     connection.end((endErr) => {
//       if (endErr) {
//         console.error("Error closing the connection:", endErr);
//       } else {
//         console.log("Connection closed.");
//       }
//     });
//   }
// );
// createing route
app.get("/home", (req, resp) => {
  let q = `SELECT COUNT(*) AS student_count FROM student`;
    connection.query(q, (err, results) => {
      if (err) {
        console.error(err);
        return resp.status(500).send("Error in DB");
      }
      let t=results[0].student_count;
      resp.render("user.ejs",{t});
      resp.send("results"); // Send the results back to the client.
    });
  
});

// app.get("/users",(req,resp)=>{
//    resp.render("all_details.ejs",{data});
// });

// app.get("/users/:id",(req,resp)=>{
//    let {id}=req.params;
//    let single_data=data.find((d)=>{
//       if(id==d[0]){
//          return d;
//       }
//    });
//    resp.render("single_data.ejs",{single_data});
// });
// app.get("/users/edit/:id",(req,resp)=>{
//   let {id}=req.params;
//    let edit_data=data.find((d)=>{
//       if(id==d[0]){
//          return d;
//       }
//    });
//    resp.render("edit.ejs",{edit_data});
   
// });
// app.post("/users",(req,resp)=>{
//   // let id=uuid();
//     let {id,username,email,pin}=req.body;
//     console.log(id,username,email,pin);
//     data[0][0]=id;
//     data[0][1]=username;
//     data[0][2]=email;
//     data[0][3]=pin;
//     console.log("data is edited");
//     resp.redirect("http://localhost:9090/users");
// });
// // add data
// app.get("/new",(req,resp)=>{
//   resp.render("new.ejs");
// });
// app.post("/new",(req,resp)=>{
//  let new_post=getdata();
//    data.push(new_post);
//    resp.redirect("http://localhost:9090/users");
// });

// app.delete("/delete/:id", (req, resp) => {
//   let { id } = req.params;
//   data = data.filter((p) => id !== String(p[0])); // Converts id to string to match comparison
//   console.log(data)
//   resp.redirect("/users");
// });


app.get("*",(req,resp)=>{
   resp.send(("Page Not Found"));
});

app.listen(port,(req,resp)=>{
  console.log(`The Server is Running in port ${port}`);
  // console.log(data);
});



