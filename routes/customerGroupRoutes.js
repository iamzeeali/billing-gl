const express = require("express");
const authController = require("../controllers/authController");
const customerGroupController = require("../controllers/customerGroupController");
const CustomerGroup = require("../models/customerGroupModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(customerGroupController.getAllCustomerGroups);

router.post(
  "/",
  [check("group", "Customer Group is required").not().isEmpty()],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { group, description } = req.body;

    try {
      let cg = await CustomerGroup.findOne({ group });

      if (cg) {
        return res.status(400).json({ msg: "Customer Group already exists" });
      }

      cg = new CustomerGroup({
        group,
        description,
        user: req.user.id,
      });

      let CG = await cg.save();
      res.json(CG);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    next();
  })
);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin"));
router
  .route("/:id")
  .get(customerGroupController.getCustomerGroup)
  .patch(customerGroupController.updateCustomerGroup)
  .delete(
    authController.restrictTo("super-admin"),
    customerGroupController.deleteCustomerGroup
  );

module.exports = router;
