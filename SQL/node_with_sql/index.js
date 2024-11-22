const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 database: 'practice',
 password :"geetha143abhi"
});

// A simple SELECT query
try{
connection.query(
 "show databases",
 function (err, results, fields) {
   console.log(results); // results contains rows returned by server
   console.log(fields); // fields contains extra meta data about results, if available
 }
);
}
catch(error){
  console.log(error);
}
connection.end;// to close the connection


let createRandomUser = ()=> {
 return {
   id: faker.string.uuid(),
   username: faker.internet.username(), // before version 9.1.0, use userName()
   email: faker.internet.email(),
   password: faker.internet.password(),
 };
}
