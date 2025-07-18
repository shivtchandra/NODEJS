//This is a backend server and now basic front end func is added

const http = require('http')
//Req is when a request is made in chrome for the given domain and portnumber
const server = http.createServer((req,res)=>{
     console.log(req.url,req.method);

     // Set header content type
     res.setHeader('Content-Type','text/html'); //To set the datatype 
     res.write('<H1>hello,mate</H1>'); // To write the data
     res.end(); // To confirm thaat thats the end 
});

server.listen(4000,'localhost',()=>{
    console.log('Listening For Request')
})

//With res.write we can update what should be shown to the user 
//When they click the browser link
//But having to write like this is kinnda messy so lets see how we can avoid it.