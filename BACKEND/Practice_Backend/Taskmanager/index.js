// Practicing the CRUD operations

let express = require("express");
let app = express();
let port = 5252;
let path = require("path");

// uuid package for create unique id's
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
let methodOverride = require('method-override');


// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))   


// database data
let data = [
    {id:uuidv4(),task:"DSA Class",Reward:"can watch youtube"},
    {id:uuidv4(),task:"MERN Stack Project",Reward:"Go Out"},
    {id:uuidv4(),task:"Communication Practice",Reward:"Use insta for 30min"}
];

app.get("/",(req,resp)=>{
     resp.send("basic route");
});

app.get("/home",(req,resp)=>{
     resp.render("home.ejs",{data});
     // console.log(data);
     
});

// create new task
// form
app.get("/add",(req,resp)=>{
      resp.render("create.ejs");

});
// adding the task
app.post("/add",(req,resp)=>{
     let id = uuidv4();
    let {task,Reward} = req.body;
    data.push({id,task,Reward});
    resp.redirect("/home");
});

// view the individual tasks
app.get("/view/:id",(req,resp)=>{
     let {id} = req.params;
     let getData =data.find((d)=>{
          if(d.id==id) {
               return d;
          }
     });
     resp.render("singleTask.ejs",{getData});
});
// edit task
app.get("/edit/:id",(req,resp)=>{
     let {id} = req.params;
     let EditData = data.find((d)=>{
           if(id==d.id) {
               return id;
           }
     });
      resp.render("editForm.ejs",{EditData});
});

app.patch("/edit/:id",(req,resp)=>{
     let {id} = req.params;
     let newtask = req.body.task;
     let newReward = req.body.Reward;
     let getData = data.find((d)=>{
           if(d.id==id) {
               return d;
           }
     });
     getData.task = newtask;
     getData.Reward = newReward;
     resp.redirect("/home");

});
// delete data
app.delete("/delete/:id",(req,resp)=>{
       let {id} = req.params;
       data = data.filter((d)=>d.id!=id);
       resp.redirect("/home");
});


app.listen(port,(req,resp)=>{
     console.log(`The server is running at port ${port}`);
});
