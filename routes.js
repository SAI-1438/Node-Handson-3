const {register,login,aboutus}=require("../controller/api")
const userRoutes=require("express").Router()
const authon2=require("../middleware/authon2")

userRoutes.get("/register",register)
userRoutes.get("/login",authon2,login)
userRoutes.get("/aboutus",aboutus)

module.exports=userRoutes;