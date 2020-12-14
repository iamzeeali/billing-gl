const express = require("express");
const authController = require("./../controllers/authController");
const warehouseController = require("./../controllers/warehouseController");
const Warehouse = require("../models/warehouseModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(warehouseController.getAllWarehouses);

router.post(
  "/",
  [
    check("code", "Warehouse Code is required")
      .not()
      .isEmpty(),
    check("warehouse", "Warehouse is required")
      .not()
      .isEmpty()
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      code,
      warehouse,
      country,
      state,
      city,
      address,
      pincode
    } = req.body;

    try {
      wh = new Warehouse({
        code,
        warehouse,
        country,
        state,
        city,
        address,
        pincode,
        user: req.user.id
      });

      let WAREHOUSE = await wh.save();
      res.json(WAREHOUSE);
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
  .get(warehouseController.getWarehouse)
  .patch(warehouseController.updateWarehouse)
  .delete(
    authController.restrictTo("super-admin"),
    warehouseController.deleteWarehouse
  );

module.exports = router;
