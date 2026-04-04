const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    scores: [
        {
            value: Number,
            date: Date
        }
    ]
});

module.exports = mongoose.model("Score", scoreSchema);