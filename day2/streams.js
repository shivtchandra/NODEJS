const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog2.txt');

const writestream = fs.createWriteStream('./docs/blog3.txt');

readStream.on('data',(chunk)=>{
    console.log('New');
    console.log(chunk.toString());
    writestream.write('\nNew\n');
    writestream.write(chunk);
})

//When the txt is huge this methodd will act like a river stream 
// Like how youtube loads us a video partially and start playing
//Instead of waiting for whole video to load
//So here the data will get update to a new file in those chunks format

//ALT METHOD
readStream.pipe(writestream);