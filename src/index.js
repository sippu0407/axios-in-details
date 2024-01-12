const express=require('express');

const app=express();

const axios=require('axios');

//interceptors always on the top

axios.interceptors.request.use(
    request => {
     request.headers['clientId']='hbshabxhdwb';
     return request;
    },
    error=> {return error}
)


app.get('/test',()=>{
 
     axios.get('https://jsonplaceholder.typicode.com/todos/1')
     .then((response)=>{
        console.log(response);
     })
     .catch((error)=>{
        console.log(error);
     })
})

//concurrent requests
// const promise1= axios.get('url');
// const promise2=axios.get('xyz');

// Promise.all(promise1,promise2).then((responseArray)=>{
//     const combined={
//     data1:responseArray[0].data,
//     data2:responseArray[1].data
//     }
//     console.log("combined data");
// }).catch((e)=>{console.log(e)}).finally(()=>{ console.log("concurrent request")})





app.listen(5000,()=>{
    console.log("server started");
})