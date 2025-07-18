//Prev we have linked static html pages 
// Now for linking dynamic ones we need view engine's
const express = require('express')

const app = express();

//we set the settings that view engiens "ejs" is linked
app.set('view engine','ejs');
app.set()

app.listen(3000);

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
