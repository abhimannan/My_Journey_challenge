let express=require("express");
let app=express();
let port=9090;
let path=require("path");
const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


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
let q = `INSERT INTO student VALUES ?`;
let data=[];
for(let i=0;i<=100;i++){
  data.push(getdata());
}
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
connection.query(
  q,[data],
  function (err, results, fields) {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      // console.log("Results:", results);
    }
    // Close the connection after the query
    connection.end((endErr) => {
      if (endErr) {
        console.error("Error closing the connection:", endErr);
      } else {
        console.log("Connection closed.");
      }
    });
  }
);
// createing route
app.get("/home",(req,resp)=>{
  let len_data=data.length;
  // // get all id's
  // for(let i of data){
  //    console.log(i[0]);
  // }
  //get all uernames
  for(let i of data){
    console.log(`Username = ${i[1]}`);
 }
//  // get all emails
//  for(let i of data){
//   console.log(i[2]);
// }
// // get all passwords
// for(let i of data){
//   console.log(i[3]);
// }
  // console.log("id = ",data[0]);
   resp.render("user.ejs",{len_data});
});

app.listen(port,(req,resp)=>{
  console.log(`The Server is Running in port ${port}`);
});



