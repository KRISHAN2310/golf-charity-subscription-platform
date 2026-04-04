const Score = require("../models/Score");

exports.addScore = async (req, res) => {
    const { value } = req.body;

    let doc = await Score.findOne({ user: req.user });

    if (!doc) {
        doc = await Score.create({
            user: req.user,
            scores: []
        });
    }

    doc.scores.push({ value, date: new Date() });

    if (doc.scores.length > 5) {
        doc.scores.shift();
    }

    await doc.save();

    res.json(doc);
};

exports.getScores = async (req, res) => {
    const data = await Score.findOne({ user: req.user });
    res.json(data);
};