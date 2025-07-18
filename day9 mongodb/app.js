//Establishing an express app/server 
//Perfoming the changes of text wfor different url's
//Connecting an html file as the url output .

const express = require('express')
//we store the express address in here 
// Invoke it with the app call , when required
const app = express();

//Here we give the port number 
app.listen(3000);

app.get('/',(req,res)=>{
//Unlike in node , We dont need to establish the content header in express
// res.send feature is Express specific.
    //res.send('<p> Hommmieee </p>');
    res.sendFile('./index.html',{root:__dirname});
//So here we link with an html file and the root thing is like a prerequisite for this to work.
// __dirname will get the directory name .
});

app.get('/details',(req,res)=>{
    // res.send('<p> About page</p>');
    res.sendFile('./about.html',{root:__dirname});

});

//Unlike in node where we write in the form of if else case .
//Here we dont do that and write them seperately .
// But the order in which we write them is imp as it goes from top - bottom.
app.use((req,res)=>{
    res.sendFile('./404.html',{root:__dirname})
}) 

//So deafult for all the urls other than the intial two.
//The last case will get triggered.