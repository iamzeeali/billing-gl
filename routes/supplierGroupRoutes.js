const express = require("express");
const authController = require("../controllers/authController");
const supplierGroupController = require("../controllers/supplierGroupController");
const SupplierGroup = require("../models/supplierGroupModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(supplierGroupController.getAllSupplierGroups);

router.post(
  "/",
  [check("group", "Supplier Group is required").not().isEmpty()],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { group, description } = req.body;

    try {
      let sg = await SupplierGroup.findOne({ group });

      if (sg) {
        return res.status(400).json({ msg: "Supplier Group already exists" });
      }

      sg = new SupplierGroup({
        group,
        description,
        user: req.user.id,
      });

      let SG = await sg.save();
      res.json(SG);
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
  .get(supplierGroupController.getSupplierGroup)
  .patch(supplierGroupController.updateSupplierGroup)
  .delete(
    authController.restrictTo("super-admin"),
    supplierGroupController.deleteSupplierGroup
  );

module.exports = router;
