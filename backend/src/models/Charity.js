const Charity = require("../models/Charity");

exports.getCharities = async (req, res) => {
    const data = await Charity.find();
    res.json(data);
};

exports.addCharity = async (req, res) => {
    const c = await Charity.create(req.body);
    res.json(c);
};