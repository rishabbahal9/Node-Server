const products=[];

module.exports.addProductGet=(req,res,next)=>
{
    res.render('add-product',{docTitle: 'Add-Product',pathC: '/add-product'});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}
module.exports.addProductPost=(req,res,next)=>
{
    products.push({title: req.body.title});
    console.log(req.body);
    res.redirect('/admin');
}