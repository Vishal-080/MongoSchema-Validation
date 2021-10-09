const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/user.model");

router.post(
  "/",
  body("first_name").isLength({ min: 3 }).withMessage("Enter Proper First Name"),
  body("last_name").isLength({ min: 3 }).withMessage("Enter Proper Last Name"),
  body("email").isEmail().isLength({ min: 5 }).withMessage("Enter a Valid Email"),
  body("pincode").isLength({ min: 6 , max:6 }).withMessage("Enter a Valid Pincode"),
  body("age").isNumeric({ min: 1 , max: 100 }).withMessage("Enter valid age"),
  body("gender").isString().withMessage("Enter Gender"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ data: errors.array() });
    }
    const user = await User.create(req.body);
    return res.status(201).json({ data: user });
  }
);

module.exports = router;
