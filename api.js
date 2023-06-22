const register=(req,res)=>{
    res.send({
        msg:"user registered"
    })
}
const login=(req,res)=>{
    res.send({
        msg:"user logged"
    })
}
const aboutus=(req,res)=>{
    res.send({
        msg:"about us"
    })
}
module.exports = {register,login,aboutus}
