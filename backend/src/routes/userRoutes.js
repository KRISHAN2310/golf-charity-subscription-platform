const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  getUser,
  subscribe,
  selectCharity,
} = require("../controllers/userController");

router.get("/", auth, getUser);
router.put("/subscribe", auth, subscribe);
router.put("/charity", auth, selectCharity);

module.exports = router;