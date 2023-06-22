const authon2=(req,res,next)=>{
    console.log("authon2 middleware")
    next();
}

module.exports=authon2;