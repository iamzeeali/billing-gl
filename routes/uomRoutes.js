const express = require("express");
const authController = require("./../controllers/authController");
const uomController = require("./../controllers/uomController");
const Uom = require("../models/uomModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(uomController.getAllUoms);

router.post(
  "/",
  [
    check("uom", "UoM is required")
      .not()
      .isEmpty()
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { uom, description } = req.body;

    try {
      let um = await Uom.findOne({ uom });

      if (um) {
        return res.status(400).json({ msg: "UoM already exists" });
      }

      um = new Uom({
        uom,
        description,
        user: req.user.id
      });

      let UOM = await um.save();
      res.json(UOM);
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
  .get(uomController.getUom)
  .patch(uomController.updateUom)
  .delete(authController.restrictTo("super-admin"), uomController.deleteUom);

module.exports = router;
