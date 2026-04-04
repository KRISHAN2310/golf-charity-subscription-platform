const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { addScore, getScores } = require("../controllers/scoreController");

router.post("/", auth, addScore);
router.get("/", auth, getScores);

module.exports = router;