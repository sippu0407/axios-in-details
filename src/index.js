const express=require('express');

const app=express();

const axios=require('axios');

app.get('/test',()=>{
 
     axios.get('https://jsonplaceholder.typicode.com/todos/1')
     .then((response)=>{
        console.log(response);
     })
     .catch((error)=>{
        console.log(error);
     })
})
app.listen(5000,()=>{
    console.log("server started");
})