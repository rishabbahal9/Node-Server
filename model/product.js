const mongoose=require('mongoose')

const Schema=mongoose.Schema

const productSchema=new Schema({
    productName: {type: String, required: true},
    costPrice: {type: Number, required: true},
    sellingPrice: {type: Number, required: true},
    markedPrice: {type: Number, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, required: true},
    unitsAvailable: {type: Number, required: true}
})

module.exports=mongoose.model('Product',productSchema)