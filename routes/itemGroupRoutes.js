const express = require("express");
const authController = require("./../controllers/authController");
const itemGroupController = require("./../controllers/itemGroupController");
const ItemGroup = require("../models/itemGroupModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(itemGroupController.getAllItemGroups);

router.post(
  "/",
  [
    check("group", "Item Group is required")
      .not()
      .isEmpty()
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { group, description } = req.body;

    try {
      let item_group = await ItemGroup.findOne({ group });

      if (item_group) {
        return res.status(400).json({ msg: "Item already exists" });
      }

      item_group = new ItemGroup({
        group,
        description,
        user: req.user.id
      });

      let ITEMGROUP = await item_group.save();
      res.json(ITEMGROUP);
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
  .get(itemGroupController.getItemGroup)
  .patch(itemGroupController.updateItemGroup)
  .delete(
    authController.restrictTo("super-admin"),
    itemGroupController.deleteItemGroup
  );

module.exports = router;
