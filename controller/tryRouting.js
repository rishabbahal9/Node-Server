const Product=require('./../model/product')
const getDb=require('./../util/database').getDb

module.exports.dbCheck=(req,res,next)=>
{
    
    const db=getDb();
    db.collection('chocolates').find().toArray()
    .then(result=>{console.log("Result:"+result);res.render('Try/dbCheck.ejs',{result:result});})
    .catch(err=>console.log(err))
    // db.collection('chocolates').insertOne({productName: "Silk", costPrice: 20, sellingPrice: 80, available: 11})
    // .then(result=>console.log(result))
    // .catch(err=>console.log(err))
}
