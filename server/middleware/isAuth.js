const jwt = require("jsonwebtoken");

module.exports = (req , res , next) => {
    try{
        const authHeader = req.get("Authorization");
        if(!authHeader){
            const error = new Error("Not authenticated");
            error.statusCode = 401;
            throw error;
        }
        //authHeader is in the form of bearer {token} so we need to split it.
        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token , "somesupersupersupersecret");
        if(!decodedToken){
            const err = new Error("Not authenticated");
            err.statusCode = 500;
            throw err;
        }
        // console.log(decodedToken);
        req.userId = decodedToken.userId;
        next();
    }
    catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}