//Import Express
const express = require('express');

const router = express.Router();

// Import shop controller
const shopController = require('../controllers/shop');

// router.get('/', shopController.getIndex);
router.get('/pagination/:pageNo', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', shopController.getCart);
router.get('/cart/:pageNo', shopController.getCart);

router.get('/products/cart', shopController.getCart)

router.post('/cart', shopController.postCart);

router.post('/products/cart/:productId', shopController.addToCart);

// router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.post('/cart-delete-item/:productId', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);
router.post('/orders/:totalPrice', shopController.createOrder);

module.exports = router;
