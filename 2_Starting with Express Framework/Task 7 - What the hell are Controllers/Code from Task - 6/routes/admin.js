const express = require("express");

const router = express.Router();

const productController = require("../controllers/products");

// admin/add-product => GET
router.get("/add-product", productController.getProduct);

// admin/add-product => POST
// we reach admin/product because 'admin.js' all files request via '2_app_StartingWithExpressFramework.js' app.use('/admin', adminRoutes);
router.post("/add-product", productController.postProduct);

module.exports = router;
