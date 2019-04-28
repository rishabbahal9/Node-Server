const express=require('express');
const path=require('path');

const rootDir=require('../util/path');

const controllerBasicRouting=require('../controller/basicRouting')
const controllerProducts=require('../controller/products')
const controllerUser=require('../controller/user')

const router=express.Router();


router.get('/',controllerUser.login);
router.get('/details/:productId',controllerProducts.getDetails);
router.post('/userSignupSubmit',controllerUser.userSignupSubmit);
router.post('/userLoginSubmit',controllerUser.userLoginSubmit);

module.exports=router;