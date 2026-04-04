// backend/src/controllers/drawController.js

const { generateDrawNumbers } = require("../services/drawService");

exports.runDraw = (req, res) => {
    const draw = generateDrawNumbers();

    res.json({
        message: "Draw generated successfully",
        draw
    });
};