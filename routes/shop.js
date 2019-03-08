const express=require('express');
const path=require('path');

const rootDir=require('./../util/path');

const controllerBasicRouting=require('./../controller/basicRouting')

const router=express.Router();


router.get('/',controllerBasicRouting.shop);

module.exports=router;