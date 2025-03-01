let express = require("express");
const router = express.Router();


// employess
router.get("/employess",(req,resp)=>{
    resp.send("this is employees page!");
});

router.get("/getcookies",(req,resp)=>{
    resp.cookie("name","abhi");
    resp.cookie("userage",12);
    resp.send(`cookies sent!`);
});

module.exports = router;