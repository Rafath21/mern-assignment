const Product=require("../models/productModel");
exports.getProducts=async(req,res)=>{
    try{
        let products = await Product.find({});
        res.status(200).json({
            products
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getOneProduct = async(req,res) =>{
    try{
        let products = await Product.find({});
        let searchProduct = req.params.value.toLowerCase();
        let result = [];
        products.forEach((product)=>{
            for(let index=0;index<product.options.length;index++) {
                if(product.options[index].includes(searchProduct)) {
                result.push(product);
                break;
                }
            }
        })
        res.status(200).json({result});
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
