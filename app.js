//Git: https://github.com/rishabbahal9/Node-Server.git
const http=require('http');
const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');


const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const port=3002;
const app=express();

//Setting View Engines
app.set('view engine','ejs');
app.set('views','views');

//Creating middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    const url=req.url;
    console.log('Request: '+url);
    next();
});


app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.render('404',{docTitle: '404: Page not found!'});
});



const server=http.createServer(app);

console.log('Listening to port '+port+':...');
app.listen(port);