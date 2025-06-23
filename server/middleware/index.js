const jwt=require("jsonwebtoken");
const user = require("../models/user");

const userAuthVerification = async(req,res,next)=>{
    const token = req.cookies.token;
    console.log(token,"token");
    if (!token){
        return res.status(400).json({
            success:false,
            message:"token not found"
        })
    }

    if (token){
        try {
            const decoded = jwt.verify(token,"SECRET_KEY")

            console.log(decoded,"decoded");
            const userInfo = await user.findById(decoded.getId)

            console.log(userInfo,"userInfo");
            
            if (userInfo)
            return res.status(200).json({
              success: true,
              userInfo,
            });
            
            next()
        } catch (error) {
             return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
        }
    }
    
}
module.exports=userAuthVerification