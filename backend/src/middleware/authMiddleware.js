const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // 🔥 FIX

        if (!token) return res.status(401).json("No token");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.id;
        next();
    } catch (err) {
        console.log("JWT ERROR:", err.message); // debug
        res.status(401).json("Invalid token");
    }
};