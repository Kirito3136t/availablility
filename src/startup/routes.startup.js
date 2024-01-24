//middlewares
const express = require("express");
const morgan = require("morgan"); // for consoling api request calls
const helmet = require("helmet"); // secures connection by adding additional header
const cors = require("cors"); // handling cors errors
const ErrorHandler = require("../middlewares/error.middlewares"); // error handler for routes, since we will continue to next route upon request

//Routers
const { AdminRouter } = require("../routes/admin.routes");
const { DashboardRouter } = require("../routes/dashboard.routes");
const { UserRouter } = require("../routes/user.routes");
const { PartnerRouter } = require("../routes/partner.routes");
const { OrderRouter } = require("../routes/order.routes");
const { InventoryRouter } = require("../routes/inventory.routes");
const { ServicesRouter } = require("../routes/services.routes");
const { ContentRouter } = require("../routes/content.routes");

module.exports = (app) => {
  app.use(express.json({ limit: "9999000009mb" })); // body parser, parses request body
  app.use(express.urlencoded({ extended: true })); // parses encoded url
  app.use(morgan("tiny")); // initiating console api requests
  app.use(helmet());
  app.use(cors());

  //start of routes
  app.use("/api/admin", AdminRouter);
  app.use("/api/dashboard", DashboardRouter);
  app.use("/api/user", UserRouter);
  app.use("/api/partner", PartnerRouter);
  app.use("/api/order", OrderRouter);
  app.use("/api/inventory", InventoryRouter);
  app.use("/api/service", ServicesRouter);
  app.use("/api/content", ContentRouter);

  //handling async errors in apis
  app.use(ErrorHandler);

  //adding additional apis
  app.get("/", (req, res) =>
    res.send({
      error: false,
      message: "SERVER IS LIVE!",
      result: null,
    })
  );
  app.get("*", (req, res) =>
    res
      .status(404)
      .send({ error: true, message: "Route not Found!", result: null })
  );
};

console.log("🛣️  Routes setup completed");
