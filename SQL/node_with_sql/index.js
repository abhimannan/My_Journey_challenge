const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta',
  password: "geetha143abhi"
});

// A simple INSERT query
let q = `INSERT INTO student VALUES ?`;
// let users = [
//   ["1254", "abhi", "abhi@gmail.com", "1431"],
//   ["1235", "abhi", "abhi@gmail.com", "148931"]
// ];
// let users2 = [
//   ["9652", "vijay", "vijay@gmail.com", "14511"],
//   ["2356", "kumar", "kuar@gmail.com", "98565"]
// ];
function getdata(){
  return [
    faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
    faker.internet.password(),
    ];
}
let data=[];
for(let i=1;i<=50;i++){
   data.push(getdata());
}
// Execute the query
connection.query(
  q, [data],
  function (err, results, fields) {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Results:", results);
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




let createRandomUser = ()=> {
 return {
   id: faker.string.uuid(),
   username: faker.internet.username(), // before version 9.1.0, use userName()
   email: faker.internet.email(),
   password: faker.internet.password(),
 };
}
