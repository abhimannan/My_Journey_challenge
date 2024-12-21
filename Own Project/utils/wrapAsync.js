const wrapAsync =(fx)=>{
  return (req,resp,next)=>{
    fx(req,resp,next).catch((e)=>{
      next(e);
    })
  }
}
module.exports=wrapAsync;
