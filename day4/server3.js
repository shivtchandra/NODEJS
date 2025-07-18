//Here we will try to link multiple html fot multiple urls

const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
     console.log(req.url,req.method);
     res.setHeader('Content-Type','text,html');
     let path = './day4/';
     switch(req.url){
        case '/':
            path += 'Display.html';
            break;
        case '/details':
            path += 'details.html';
            break;
//Below is a case of Redirecting a url to another one
        case '/details-me':
            res.setHeader('Location','/details')
            res.end()
            break;
        default : 
            path += 'error.html';
            break;
     }
     
     fs.readFile(path,(err,data)=>{
        if (err){
            console.log('error')
        }else {
            res.write(data);
            res.end();
            console.log('Working')
        }
     })
});

server.listen(4000,'localhost',()=>{
    console.log('Listening For Request')
})

//Here everytime we make a change , we should restart the server
//For the changes to reflect .But it isnt gonna wokr in long term
//Fot this we use special packages from npm.
//Nodemon does this for us everytime we make a change.