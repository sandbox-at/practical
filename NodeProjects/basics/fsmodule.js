var fs = require('fs')



//asynchronus way to read file
// fs.readFile('test.txt', (error, data)=>{
//     if(error) return console.error(error)
//     console.log(data.toString())
// })

// console.log(data.toString());


//synchronus way

let data = fs.readFileSync("test.txt");


console.log(data.toString());
