const mongoose=require("mongoose");
const productModel=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Product name is required!"]
    },
    listOfImages: [String],
    options:[String],
    description: String,
    ProductId: Number,
    Quantity: Number,
    Rating: Number,
    brandName: String
})

const Product=mongoose.model('products',productModel)
module.exports=Product;

