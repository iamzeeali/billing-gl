const express = require("express");
const authController = require("./../controllers/authController");
const purchaseQuotationController = require("./../controllers/purchaseQuotationController");
const PurchaseQuotation = require("../models/purchaseQuotationModel");

const { check, validationResult } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only
router.use(authController.restrictTo("super-admin", "user", "admin"));

router.route("/").get(purchaseQuotationController.getAllPurcaseQuotations);

router.post(
  "/",
  catchAsync(async (req, res, next) => {
    const { supplier, dDate, qDate, pqItems, total } = req.body;

    try {
      pq = new PurchaseQuotation({
        supplier,
        dDate,
        qDate,
        pqItems,
        total,
        user: req.user.id,
      });

      let PQ = await pq.save();
      res.json(PQ);
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
  .get(purchaseQuotationController.getPurcaseQuotation)
  .patch(purchaseQuotationController.updatePurcaseQuotation)
  .delete(
    authController.restrictTo("super-admin"),
    purchaseQuotationController.deletePurcaseQuotation
  );

module.exports = router;
