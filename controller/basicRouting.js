const Product=require('./../model/product')
const User=require('./../model/product')

module.exports.adminHome=(req,res,next)=>
{
    res.render('adminHome.ejs');
}

module.exports.shop=(req,res,next)=>
{
        Product.find()
        .then(result=>{
            //console.log(result)
            res.render('shop',{result: result});
        })    
}

