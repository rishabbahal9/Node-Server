const express=require('express');

const controllerUser=require('../controller/user')

const router=express.Router();


router.get('/',controllerUser.login);
router.get('/details/:productId',controllerUser.getDetails);
router.post('/userSignupSubmit',controllerUser.userSignupSubmit);
router.post('/userLoginSubmit',controllerUser.userLoginSubmit);

module.exports=router;