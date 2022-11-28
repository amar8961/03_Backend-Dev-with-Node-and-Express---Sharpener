// Import product model
const Product = require('../models/product');
// const Cart = require('../models/cart');

// Index
exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Products
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      // res.render('shop/product-list', {
      //   prods: products,
      //   pageTitle: 'All Products',
      //   path: '/products'
      // });
      res.status(200).json({products})
    })
    .catch(err => {
      console.log(err);
    });
};

// Product Details
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(req.params)
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
      res.status(200).send(product)
    })
    .catch(err => console.log(err));
};

// Cart
exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          // res.render('shop/cart', {
          //   path: '/cart',
          //   pageTitle: 'Your Cart',
          //   products: products
          // });
          console.log(products)
          res.status(200).send(products)
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

// Add to cart
exports.addToCart = (req, res, next) => {
  const prodId = req.params.productId;
  // console.log(req.params)
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then((response) => {
      console.log(response)
      res.status(201).send(response)
      // res.redirect('/cart');
    })
    .catch(err => console.log(err));
};

// Post cart - Quantity
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findByPk(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    // .then(() => {
    //   res.redirect('/cart');
    .then((response) => {
      console.log(response)
      res.redirect('/')
    })
    .catch(err => console.log(err));
};

// Delete from cart
exports.postCartDeleteProduct = (req, res, next) => {
  // const prodId = req.body.productId;
  console.log(req.params)
  req.user
  .getCart()
  .then(cart => {
    // return cart.getProducts({ where: { id: prodId } })
    return cart.getProducts({ where: { id: req.params.productId } }); //
  })
  .then(products => {
    const product = products[0];
    return product.cartItem.destroy();
  })
  .then(result => {
    // res.redirect('/cart')
    res.status(201).send(result);
  })
  .catch(err => console.log(err))
};

// Order
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

// Checkout
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
