const express=require('express');
const path=require('path');

const rootDir=require('./../util/path');

const controllerAdmin=require('./../controller/admin')

const router=express.Router();


router.get('/',controllerAdmin.adminHome);
router.post('/add-product',controllerAdmin.addProductPost);
router.get('/admin-shop-view',controllerAdmin.adminShopView);
router.get('/deleteProduct/:productId',controllerAdmin.deleteProduct);

exports.routes=router;