const Product=require('./../model/product')

module.exports.adminHome=(req,res,next)=>
{
    res.render('adminHome.ejs',{docTitle: 'AdminHome'});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}

module.exports.shop=(req,res,next)=>
{
    const products=Product.fetchAll();
    res.render('shop',{docTitle: 'MyShop',pathC: '/',products: products});
}