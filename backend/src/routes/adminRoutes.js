const router = require("express").Router();
const User = require("../models/User");

// Get all users (admin)
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;