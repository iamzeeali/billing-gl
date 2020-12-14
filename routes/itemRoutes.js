const express = require("express");
const authController = require("./../controllers/authController");
const itemController = require("./../controllers/itemController");
const itemModel = require("../models/itemModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(itemController.getAllItems);

router.post(
  "/",
  [
    check("itemCode", "Item Code is required")
      .not()
      .isEmpty(),
    check("name", "Item Name is Required")
      .not()
      .isEmpty(),
    check("group", "Item Group is Required")
      .not()
      .isEmpty()
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      type,
      itemCode,
      name,
      serial,
      group,
      description,
      uom,
      barcode,
      unitPrice,
      inventoryItem,
      salesItem,
      purchaseItem,
      warehouse,
      inStock
    } = req.body;

    try {
      let item = await itemModel.findOne({ itemCode });

      if (item) {
        return res.status(400).json({ msg: "Item already exists" });
      }

      item = new Item({
        type,
        itemCode,
        name,
        serial,
        group,
        description,
        uom,
        barcode,
        unitPrice,
        inventoryItem,
        salesItem,
        purchaseItem,
        warehouse,
        inStock,
        user: req.user.id
      });

      let ITEM = await item.save();
      res.json(ITEM);
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
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(authController.restrictTo("super-admin"), itemController.deleteItem);

module.exports = router;
