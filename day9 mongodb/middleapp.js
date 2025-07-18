// Now we are adding mongodb database to the file 
const express = require('express')
const morgan = require('morgan')

const mongoose = require('mongooses')
const app = express();

const dbURI = 'mongodb+srv://shivachandra:i0JQsf9vLbmcVFrR@cluster0.x46kglr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI);

app.set('view engine','ejs');
app.set()

app.listen(3000);


app.use((req,res,next)=>{
    console.log('New user');
    console.log(req.hostname);
    console.log(req.path);
    console/log(req.method);
    next()
})

// Here with the help of morgon , we do not need to write the above set of statements
// It will give us the same details in the terminal

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    const blogs = [
        {title:'mongo db',snippet:'used for databse'},
        {title:'nodejs',snippet:'used for backend'}
//Now we go to the ejs file of index and write the code to display these
    ]

// We use render and name the file we want to display
    res.render('index',{blogs});

});

app.get('/about',(req,res)=>{
   
    res.render('about');

});

//Now we create a new file and add it to the main file
app.get('/create',(req,res)=>{
    res.render('create')
})


app.use((req,res)=>{
    res.render('404')
}) 


//So now we try to give a dict conataining blog title and snippets
