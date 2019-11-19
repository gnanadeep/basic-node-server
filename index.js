const express = require('express');
const https = require('https');

const port = 1111;

const app = express();


app.listen(port, () =>{
  console.log('hello world');
});


app.get('/hello', (req,res) => {
  console.log('hello world');
  let a = '';

https.get('https://jsonplaceholder.typicode.com/todos', (response)=> {
  response.on('data',(chunk)=>{
    a += chunk;
  });

  response.on('end' , () => {
    // console.log(a);
    res.send(a);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});





})
