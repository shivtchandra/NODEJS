//So here we get data form an html file and link it the node file

const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
     console.log(req.url,req.method);
     res.setHeader('Content-Type','text,html');

     fs.readFile('./day4/Display.html',(err,data)=>{
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

//So now instead of making our node code messy
//We can just write it in another page and link it
