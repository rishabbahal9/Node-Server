const Product=require('./../model/product')

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

module.exports.adminHome=(req,res,next)=>
{
    res.render('Admin/adminHome.ejs');
}

module.exports.adminShopView=(req,res,next)=>{
    Product.find()
    .then(result=>{
        //console.log(result)
        res.render('Admin/adminProductView',{result: result});
    })    
}

module.exports.deleteProduct=(req,res,next)=>{
    Product.findByIdAndRemove(req.params.productId)
    .then(r=>{res.redirect('/admin/admin-shop-view')})
    .catch(err=>{console.log(err)})
}