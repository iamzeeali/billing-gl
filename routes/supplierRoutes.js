const express = require("express");
const authController = require("../controllers/authController");
const supplierController = require("./../controllers/supplierController");
const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");
const supplierModel = require("../models/supplierModel");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(supplierController.getAllSuppliers);

router.post(
  "/",
  [
    check("sCode", "Supplier Code is required").not().isEmpty(),
    check("name", "Supplier Name is Required").not().isEmpty(),
    check("group", "Supplier Group is Required").not().isEmpty(),
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      sCode,
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
      let supplier = await supplierModel.findOne({ sCode });

      if (supplier) {
        return res.status(400).json({ msg: "Supplier already exists" });
      }

      supplier = new supplierModel({
        sCode,
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

      let SUPPLIER = await supplier.save();
      res.json(SUPPLIER);
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
  .get(supplierController.getSupplier)
  .patch(supplierController.updateSupplier)
  .delete(
    authController.restrictTo("super-admin"),
    supplierController.deleteSupplier
  );
module.exports = router;
