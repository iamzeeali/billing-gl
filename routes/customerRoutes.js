const express = require("express");
const authController = require("./../controllers/authController");
const customerController = require("./../controllers/customerController");
const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");
const Customer = require("../models/customerModel");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(customerController.getAllCustomers);

router.post(
  "/",
  [
    check("cCode", "Customer Code is required").not().isEmpty(),
    check("name", "Customer Name is Required").not().isEmpty(),
    check("group", "Customer Group is Required").not().isEmpty(),
  ],
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      cCode,
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
      let customer = await Customer.findOne({ cCode });

      if (customer) {
        return res.status(400).json({ msg: "Customer already exists" });
      }

      customer = new Customer({
        cCode,
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

      let CUSTOMER = await customer.save();
      res.json(CUSTOMER);
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
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(
    authController.restrictTo("super-admin"),
    customerController.deleteCustomer
  );
module.exports = router;
