const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config({ path: "./config.env" });
/*if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({ path: "./config.env" });
    app.use(cors());

}*/
const PORT=process.env.PORT;
const connectDB=require("./config/db");
const path=require("path")
app.use(cors());
app.use(express.json())
connectDB();
app.use("/api/v1",require("./routes/getProductsRoute"));

/*app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
})*/
app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`)
})