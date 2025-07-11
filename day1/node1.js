const name = 'Shiva'

console.log(name);

const greet = name =>{
    console.log(`hello,${name}`)
};



//console.log(global);

setTimeout(()=>{
    console.log('Appears aftr 5 secs')
},5000);

setInterval(() =>{
    console.log('Every 4 secs this will be printed')
},4000);
//Use contrl c tp stop this running

console.log(_dirname); //Will give the directory address
console.log(_filname); //Will give the file address