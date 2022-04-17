const http = require('http');
const fs = require('fs'); // to read files

const server = http.createServer((req , res)=>{
  fs.readFile('./data.json' , null , (error , data)=>{
    if(error){
      res.end('file have error')
    }
    else{
      res.end(data)
    }
  })
})

server.listen(3000 , '127.0.0.1' , ()=>{
  console.log('server running...')
})