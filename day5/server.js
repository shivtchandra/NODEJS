const http = require('http');
const fs = require('fs');
const  _ = require('lodash');

const server = http.createServer((req,res)=>{
     console.log(req.url,req.method);
//the below feature will make sure that the greeting is done only once
     const greet = _.once(()=>{
        console.log('Hello')
     })

     greet();

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
