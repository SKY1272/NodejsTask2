const express=require('express');
const app=express();
const port=4000;
function addUserMiddleware(req,res,next){
  req.user='Guest';
  next();
}
app.get('/welcome',addUserMiddleware,(req,res)=>{
  res.send(`<h1>Welcome ${req.user}</h1>`)
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});
