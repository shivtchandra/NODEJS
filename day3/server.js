//This is a backend server 

const http = require('http')
//Req is when a request is made in chrome for the given domain and portnumber
const server = http.createServer((req,res)=>{
     console.log('User request');
});

server.listen(4000,'localhost',()=>{
    console.log('Listening For Request')
})

//will return Request Made when we try to open localhost:4000 on browser
//But the frontend will be empty as we didnt do anything for the front end 
//This is only backend functionality so the response is on Terminal not on console