// Now we are adding mongodb database to the file 
const express = require('express')
const morgan = require('morgan')
const Blog = require('./models/blogs') // Importing the Blog model

const mongoose = require('mongoose')
const app = express();
// filepath: /Users/shivat/Documents/Nodejs/day9/middleapp.js
const dbURI = 'mongodb+srv://shivachandra:<your-password>@cluster0.z8ufpfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log('MongoDB connection error:', err));;

app.set('view engine','ejs');



// Here with the help of morgon , we do not need to write the above set of statements
// It will give us the same details in the terminal

app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/add-blog',(req,res)=>{
    const blog = new Blog(
        { title:'mongo db123',snippet:'used for databse',body :'mongodb is a no sql db'},
    //Now we go to the ejs file of index and write the code to display these
    )

      blog.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });


app.get('/single-blog',(req,res)=>{
    Blog.findById('6891f9b9ff3b4c065bc6ac8f')
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
})
});




