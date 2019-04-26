const express=require('express');
const path=require('path');

const rootDir=require('./../util/path');

const controllerBasicRouting=require('./../controller/basicRouting')
const controllerProducts=require('./../controller/products')

const router=express.Router();


router.get('/',controllerBasicRouting.shop);
router.get('/details/:productId',controllerProducts.getDetails);

module.exports=router;