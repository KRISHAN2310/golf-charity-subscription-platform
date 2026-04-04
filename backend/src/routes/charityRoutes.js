const router = require("express").Router();
const { getCharities, addCharity } = require("../controllers/charityController");

router.get("/", getCharities);
router.post("/", addCharity);

module.exports = router;