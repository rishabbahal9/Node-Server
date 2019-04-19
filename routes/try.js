const express=require('express');
const path=require('path');

const rootDir=require('./../util/path');

const controllerTryRouting=require('./../controller/tryRouting')

const router=express.Router();


router.get('/dbCheck',controllerTryRouting.dbCheck);

module.exports=router;