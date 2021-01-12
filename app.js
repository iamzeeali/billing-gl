const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");

// import Routes
const userRouter = require("./routes/userRoutes");
const customerRouter = require("./routes/customerRoutes");
const supplierRouter = require("./routes/supplierRoutes");
const itemRouter = require("./routes/itemRoutes");
const itemGroupRouter = require("./routes/itemGroupRoutes");
const inventoryRouter = require("./routes/inventoryRoutes");
const warehouseRouter = require("./routes/warehouseRoutes");
const uomRouter = require("./routes/uomRoutes");
const customerGroupRouter = require("./routes/customerGroupRoutes");
const supplierGroupRouter = require("./routes/supplierGroupRoutes");

const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"));

// *********************GLOBAL MIDDLEWARES*******************************
//set security http headers
app.use(helmet());

//development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Limit request from same IP
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

//body parser, reading data into req.body
app.use(express.json({ limit: "10kb" }));

//Data sanitization against Nosql query injections
app.use(mongoSanitize());

//Data sanitization against XSS(cross site scripting attacks)
app.use(xss());

//Prevent Paramter Pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(compression());

//***************************/ROUTES***********************************

app.use("/api/user", userRouter);
app.use("/api/customer", customerRouter);
app.use("/api/supplier", supplierRouter);
app.use("/api/item", itemRouter);
app.use("/api/item-group", itemGroupRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/warehouse", warehouseRouter);
app.use("/api/uom", uomRouter);
app.use("/api/customer-group", customerGroupRouter);
app.use("/api/supplier-group", supplierGroupRouter);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
