const Product=require('./../model/product')


module.exports.addProductGet=(req,res,next)=>
{
    res.render('add-product',{docTitle: 'Add-Product',pathC: '/add-product'});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}
module.exports.addProductPost=(req,res,next)=>
{
    const product=new Product(req.body.title);
    product.saveTitle();
    res.redirect('/admin');
}