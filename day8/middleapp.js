// Middle ware
const express = require('express')
// Morgan is an middleware package .
const morgan = require('morgan')
const app = express();


app.set('view engine','ejs');
app.set()

app.listen(3000);

// Below are few req features to get more details on the web req being made by the user.
app.use((req,res,next)=>{
    console.log('New user');
    console.log(req.hostname);
    console.log(req.path);
    console/log(req.method);
//But when we run this the browser req will not get a res as it gets stuck.
//so we use next feature to tell it move forward.
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
