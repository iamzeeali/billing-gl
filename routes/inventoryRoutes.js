const express = require("express");
const authController = require("./../controllers/authController");
const inventoryController = require("./../controllers/inventoryController");
const Inventory = require("../models/inventoryModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(inventoryController.getAllInventories);

router.post(
  "/",
  [
    check("quantity", "Inventory quantity is required")
      .not()
      .isEmpty(),
    check("warehouse", "Warehouse Id is required")
      .not()
      .isEmpty(),
    check("item", "Item Id is required")
      .not()
      .isEmpty()
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { warehouse, item, quantity } = req.body;

    try {
      inv = new Inventory({
        warehouse,
        item,
        quantity,
        user: req.user.id
      });

      let INVENTORY = await inv.save();
      res.json(INVENTORY);
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
  .get(inventoryController.getInventory)
  .patch(inventoryController.updateInventory)
  .delete(
    authController.restrictTo("super-admin"),
    inventoryController.deleteInventory
  );

module.exports = router;
