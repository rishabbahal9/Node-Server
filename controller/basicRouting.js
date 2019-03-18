const Product=require('./../model/product')

module.exports.adminHome=(req,res,next)=>
{
    res.render('adminHome.ejs',{docTitle: 'AdminHome'});
}

module.exports.shop=(req,res,next)=>
{
    const products=Product.fetchAll((products)=>{
        res.render('shop',{docTitle: 'MyShop',pathC: '/',products: products});
    });
    
}