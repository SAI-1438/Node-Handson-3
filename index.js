const route=require("./Routes/routes")
const express=require('express')
const authon=require("./middleware/authon");
const app=express()
app.use(authon)
app.use("/",route)
app.listen(8080)