const authorization = (str)=>{

    return (req,res,next)=>{
const tokenPayLoad = req.token ;

if (tokenPayLoad.role.permissions.includes(str)){
    next()

}
else{
    res.status(403).json({success : false , message : "Unauthorized"})
}
    } 
}

module.exports = {authorization}