const fs = require('fs');

//Read file
fs.readFile('./docs/blog.txt',(err,data)=>{
    if (err) {
        console.log('Error');
    }console.log(data.toString());
});

//Write file
//The below code willc hange the text at given loc to the one given beside the loc
fs.writeFile('./docs.blog.txt','Good night',()=>{
    console.log('Done')
})

//In similar fashion a new file can also be created by giving a new file path
//Directories
//Below we create a new directory 
fs.mkdir('./assets',(err,done)=>{
    if (err){
        console.log('Error');
    }console.log('Done');
})

// So now what happens if the dir already exists ?. 
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err,done)=>{
    if (err){
        console.log('Error');
    }console.log('Done');
})
}else {
    fs.rmdir('./assets',(err)=>{
    if (err){
        console.log('Error');
    }console.log('File Deleted');
})
}
//Here we check if its there .
// If not there then we create it .(mkdir)
// If it is there we delete it .(rmdir)
