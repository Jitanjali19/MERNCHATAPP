// const express=require('express');
// const {registerUser,authUser,allUsers}=require("../controllers/userControl");
// const router=express.Router();
// const { protect } = require("../middlewares/authMiddleware")

// router.post('/',registerUser);
// // router.route('/').post(registerUser).get(protect, allUsers);

// router.post('/login',authUser);
// // router.route.get('/',allUsers)
// router.get('/', protect, allUsers);
// module.exports= router;


const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;