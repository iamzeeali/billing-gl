const express = require("express");
const authController = require("../controllers/authController");
const bpGroupController = require("../controllers/bpGroupController");
const BpGroup = require("../models/bpGroupModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(bpGroupController.getAllBpGroups);

router.post(
  "/",
  [
    check("group", "BP Group is required")
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
      let bpg = await BpGroup.findOne({ group });

      if (bpg) {
        return res.status(400).json({ msg: "BP Group already exists" });
      }

      bpg = new BpGroup({
        group,
        description,
        user: req.user.id
      });

      let BPG = await bpg.save();
      res.json(BPG);
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
  .get(bpGroupController.getBpGroup)
  .patch(bpGroupController.updateBpGroup)
  .delete(
    authController.restrictTo("super-admin"),
    bpGroupController.deleteBpGroup
  );

module.exports = router;
