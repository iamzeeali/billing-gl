const express = require("express");
const authController = require("./../controllers/authController");
const bpController = require("./../controllers/bpController");
const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");
const BusinessPartner = require("../models/businessPartnerModel");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(bpController.getAllBusinessPartners);

router.post(
  "/",
  [
    check("bpCode", "Business Partner Code is required").not().isEmpty(),
    check("type", "Business Partner Type is Required").not().isEmpty(),
    check("name", "Business Partner Name is Required").not().isEmpty(),
    check("group", "Business Partner Group is Required").not().isEmpty(),
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      bpCode,
      type,
      name,
      group,
      phone1,
      phone2,
      mobile,
      email,
      photo,
      industry,
      contactPerson,
      contactPersonPhone,
      contactPersonEmail,
      shipToCountry,
      shipToState,
      shipToCity,
      shipToAddress,
      shipToPhone,
      shipToEmail,
      billToCountry,
      billToState,
      billToCity,
      billToAddress,
      billToPhone,
      billToEmail,
      gstin,
      creditLimit,
      pan,
      paymentTerms,
      bank,
      accountNo,
    } = req.body;

    try {
      let bp = await BusinessPartner.findOne({ bpCode });

      if (bp) {
        return res.status(400).json({ msg: "Business Partner already exists" });
      }

      bp = new BusinessPartner({
        bpCode,
        type,
        name,
        group,
        phone1,
        phone2,
        mobile,
        email,
        photo,
        industry,
        contactPerson,
        contactPersonPhone,
        contactPersonEmail,
        shipToCountry,
        shipToState,
        shipToCity,
        shipToAddress,
        shipToPhone,
        shipToEmail,
        billToCountry,
        billToState,
        billToCity,
        billToAddress,
        billToPhone,
        billToEmail,
        gstin,
        creditLimit,
        pan,
        paymentTerms,
        bank,
        accountNo,
        user: req.user.id,
      });

      let BUSINESSPARTNER = await bp.save();
      res.json(BUSINESSPARTNER);
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
  .get(bpController.getBusinessPartner)
  .patch(bpController.updateBusinessPartner)
  .delete(
    authController.restrictTo("super-admin"),
    bpController.deleteBusinessPartner
  );
module.exports = router;
