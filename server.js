const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.listen(3000,() => {
  console.log("The server is now running");  //print to the console
});


app.get('/', (req, res) => res.sendFile(__dirname+'/client/index.html'));//connects the backend towards the front end. make sure to plus the folder than contain the index.html

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/client/contact.html');
  console.log(req.body);
}
);//connects the backend towards the front end. make sure to plus the folder than contain the index.html

//sets view engine
app.use(express.static(__dirname+'/client'));

//app.listen(3000,() => {
   //console.log(firstname) //you will get your data in this as object.

  // let inputContent = req.body.firstname;
 //console.log(inputContent);
//})
