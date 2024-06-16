const express = require('express');
const app = express();
const cors=require('cors')
const PORT = 5000;
const userRoutes = require("./routes/userRoutes") 
const accountRoutes = require("./routes/accountRoutes")
const bodyParser = require("body-parser")
 
app.use(express(),cors({
    origin:"*",
    methods:["POST","GET","PUT","DELETE"]
}),bodyParser());
app.use("/user",userRoutes)
app.use("/account",accountRoutes)
   
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
