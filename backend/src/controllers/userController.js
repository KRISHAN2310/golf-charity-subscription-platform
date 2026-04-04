const User = require("../models/User");

// 👤 GET USER
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate("charity");
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// 💳 SUBSCRIBE
exports.subscribe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user,
      { "subscription.status": "active" },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// ❤️ SELECT CHARITY
exports.selectCharity = async (req, res) => {
  try {
    const { charityId } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user,
      { charity: charityId },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};