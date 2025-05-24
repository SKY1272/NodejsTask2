const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
  res.send('Server is up and running on port 3000! Ready to handle requests.');
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});
