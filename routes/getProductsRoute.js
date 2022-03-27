const express=require("express");
const router=express.Router();
const {getProducts, getOneProduct} =require("../controllers/getProducts")
router.route("/").get(getProducts);
router.route("/:value").get(getOneProduct);
module.exports=router;