const express=require('express');
const path=require('path');

const rootDir=require('./../util/path');
const controllerProducts=require('./../controller/products')
const controllerBasicRouting=require('./../controller/basicRouting')

const router=express.Router();


router.get('/',controllerBasicRouting.adminHome);


router.get('/add-product',controllerProducts.addProductGet);

router.post('/add-product',controllerProducts.addProductPost);

exports.routes=router;