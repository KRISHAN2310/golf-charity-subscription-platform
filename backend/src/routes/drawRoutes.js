const router = require("express").Router();
const { runDraw } = require("../controllers/drawController");

router.get("/", runDraw);

module.exports = router;