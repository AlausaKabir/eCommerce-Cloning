const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../validation/verifyToken");
const { updatePasswords } = require("../controller/User");
const User = require("../model/User");

router.put("/:id", verifyTokenAndAuthorization, updatePasswords);
module.exports = router;
