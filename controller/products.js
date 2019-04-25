const Product=require('./../model/product')


module.exports.addProductGet=(req,res,next)=>
{
    res.render('add-product',{docTitle: 'Add-Product',pathC: '/add-product'});
}
module.exports.addProductPost=(req,res,next)=>
{
    const productName=req.body.productName;
    const costPrice=req.body.costPrice;
    const sellingPrice=req.body.sellingPrice;
    const markedPrice=req.body.markedPrice;
    const description=req.body.description;
    const imgUrl=req.body.imgUrl;
    const unitsAvailable=req.body.unitsAvailable;
    
    const product=new Product({
        productName:productName,
        costPrice:costPrice,
        sellingPrice:sellingPrice,
        markedPrice:markedPrice,
        description:description,
        imgUrl:imgUrl,
        unitsAvailable:unitsAvailable
    })

    product.save()
    .then(result=>{
        console.log("ProductAdded!")
        res.redirect('/admin')
    })
    .catch(err=>{
        console.log(err)
    })
    
}