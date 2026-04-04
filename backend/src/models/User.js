const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,

    // 💳 Subscription
    subscription: {
      status: { type: String, default: "inactive" }, // active / inactive
      plan: { type: String, default: "monthly" }, // monthly / yearly
      expiry: Date
    },

    // ❤️ Charity Selection
    charity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Charity",
      default: null
    },

    // 🏆 Winnings
    winnings: {
      type: Number,
      default: 0
    },

    // 🎯 Draw Participation (optional but good)
    drawHistory: [
      {
        drawDate: Date,
        matchedNumbers: Number,
        wonAmount: Number
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);