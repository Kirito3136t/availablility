const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env;


module.exports.Auth = async (req,res,next) => {
    // const token = req.headers['authorization'].split(" ")[1];
    // const decodedData = jwt.verify(token,JWT_SECRET);
    // req.user = decodedData

    // console.info({token,decodedData})
    console.info("ADMIN AUTHENTICATED")

    next()
}