const express = require("express");
const app = express();
// const port = 5060;
const cookieParser =  require('cookie-parser');
app.use(cookieParser("secretcode"));
var flash = require('connect-flash');
const path = require("path");

// views
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const employee = require("./routers/employees.js");

// below line contains all the employees routes
app.use("/",employee);
app.use(flash());


// express-sessions
const session = require("express-session");

const sessionOptions = {
     secret:"secretecodestring",
     resave: false,
     saveUninitialized: true,
     // cookie: { secure: true }
};

// miidleware for the session creation
app.use(session(sessionOptions));

app.get("/test",(req,resp)=>{
     resp.send("Successfully sent!");
});
// to save the data
app.get("/getCount",(req,resp)=>{
     // creation of the session variable
     if(req.session.count){
          req.session.count++;
     }
     else{
          req.session.count=1;
     }

     resp.send(`the request sent ${req.session.count} times`);
});

// Storing & use the session data
app.get("/register",(req,resp)=>{
      let {name="Anonymous"} = req.query;
      req.session.name=name;
      console.log(name);
      resp.send(name);
});
// another route for the using the session information
app.get("/hello",(req,resp)=>{
     // use the session variable
      resp.send(`This is the session variable : ${req.session.name}`);
}
);
// another route for the use of session variable
app.get("/another",(req,resp)=>{
      resp.send(`use of session variable : ${req.session.name}`);
});

// store & use session info
app.get("/session",(req,resp)=>{
      let {name="Default : abhi"}=req.query;
      req.session.name=name;
      resp.send(req.session.name);
});
app.get("/abhi",(req,resp)=>{
     console.log(req.session.name);
     resp.send(`session variable ${req.session.name}`);
});

// Access Cookies
app.get("/greet",(req,resp)=>{
     let {name="ananymous"} = req.cookies;
     console.log(req.cookies);
     resp.send(`Hi ${name}`);
});
// signed cookies
   // send sined cookies
app.get("/signedcookies",(req,resp)=>{
     resp.cookie("user","geetha",{signed:true});
     resp.send("signed cookies sent successfully!");
});
app.get("/verify",(req,resp)=>{
    //  console.log(req.cookies);
     console.log(req.signedCookies);// get the signed data
     resp.send(`The cookies are received!`);
});

app.get("/signedWelcome",(req,resp)=>{
     let {user}=req.signedCookies.user;
     console.log(user);
     resp.send(`Hi ${user} , Welcome to the world of programming!`);
});

app.get("/emailLogin",(req,resp)=>{
     resp.cookie("name","abhi",{signed:true});
     resp.cookie("age",20,{signed:true});
     resp.cookie("year","3rd year",{signed:true});
     resp.send("User Data Has Been Saveed!");
});
app.get("/getData",(req,resp)=>{
      let {name,age,year}=req.signedCookies;
      console.log(name);
      console.log(age);
      console.log(year);
});

// middleware for the flash messages diaplay
app.use((req,resp,next)=>{
     resp.locals.successMsg=req.flash('successMeg');
     resp.locals.errorMsg=req.flash("failureMsg");
     next();   
});

// using connect-flash package
app.get('/demo', (req, res)=>{
     let {mother="unknwown"} = req.query;
     req.session.mother=mother;
//     console.log(req.session.mother);
     if(mother==="geetha"){
          req.flash('successMeg', 'Registered Successfully!');
     }
     else{
          req.flash('failureMsg', 'User is Not Registered!!');
     }
     
     res.redirect("/geetha");
   });
   
   app.get("/geetha",(req,resp)=>{
     // below 2lines are added in the form of middleware
     // resp.locals.successMsg=req.flash('successMeg');
     // resp.locals.errorMsg=req.flash("failureMsg");
        resp.render("demo.ejs",{name:req.session.mother});

   });    

app.listen(9090,(res,resp)=>{
    console.log(`the server is running at port 9090`);
});
