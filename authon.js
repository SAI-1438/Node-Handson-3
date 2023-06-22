const authon=(req,res,next)=>{
    console.log("authon middleware")
    next();
}

module.exports=authon;