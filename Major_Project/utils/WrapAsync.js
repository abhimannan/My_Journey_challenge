// asyncWarp fx - To handle the async function errors
// This is the user defined function
module.exports=(fx)=>{
 return (req,resp,next)=>{
    fx(req,resp,next).catch((e)=>{
       next(e);
    });
 }
}