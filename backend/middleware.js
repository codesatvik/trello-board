const jwt = require("jsonwebtoken");
require("dotenv").config()

function authMiddleware(req, res, next) { 
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.jwtSecret)
    const userId = decoded.userId;
    if (userId) {
        req.userId = userId;
        next();
    } else { 
        res.status(403).json({
            message:"token is incorrect"
        })
    }
}
module.exports = {
    authMiddleware:authMiddleware
}