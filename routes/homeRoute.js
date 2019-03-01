const express=require('express');
const path=require('path');

const router=express.Router();

router.use('/home',(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','views','home.html'));
});

router.use('/myHome',(req,res,next)=>
{
    res.redirect('/home');
});
module.exports=router;