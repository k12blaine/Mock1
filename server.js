const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.listen(3000,() => {
  console.log("The server is now running");  //print to the console
});

app.get('/', (req, res) => res.send('Hello team'));
