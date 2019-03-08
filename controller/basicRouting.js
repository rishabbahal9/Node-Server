module.exports.adminHome=(req,res,next)=>
{
    res.render('adminHome.ejs',{docTitle: 'AdminHome'});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}

module.exports.shop=(req,res,next)=>
{
    //console.log('shopjs',adminData.products);
    //const products=adminData.products;
    res.render('shop',{docTitle: 'MyShop',pathC: '/'});
    //res.sendFile(path.join(rootDir,'views','shop.html'));
}