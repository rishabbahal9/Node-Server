//Git: https://github.com/rishabbahal9/Node-Server.git
const http=require('http');
const path=require('path');

const express=require('express');

const homeRouter=require('./routes/homeRoute');

const port=3000;
const app=express();

//Creating middlewares
app.use((req,res,next)=>{
    const url=req.url;
    console.log('Request: '+url);
    next();
});

app.use(homeRouter);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','pageNotFound.html'));
});



const server=http.createServer(app);

console.log('Listening to port '+port+':...');
app.listen(port);