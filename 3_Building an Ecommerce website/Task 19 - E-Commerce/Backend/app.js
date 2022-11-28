// import Express.
const express = require('express');
const app = express();
// The Path module provides a way of working with directories and file paths.
const path = require('path');
// It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
const bodyParser = require('body-parser');

// Import
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Orders=require('./models/orders');

// use ejs view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// with this users should be able to access 'public' path // it will take any request that tries to find some file.
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  // find user by id 1
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

// use routes '/admin' automatically add 'admin' before link.
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

// Relation
// ON DELETE CASCADE constraint is used in MySQL to delete the rows from the child table automatically, when the rows from the parent table are deleted.
// Using constraints prevents the storage of invalid data in a table. Constraints are Boolean expressions that return TRUE or FALSE.
Orders.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Orders)
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
// force: true -> the database gets dropped and recreated, so of course it matches the latest schema, but you lose all data.  
// .sync({ force: true })
  .sync()
  // sync() is used to synchronize your Sequelize model with your database tables.
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      // Create Dummy User
      return User.create({ name: 'Amar', email: 'amarkumar8961@gmail.com' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
    return user.createCart();
    // createCart(); -> to not be more than one cart for each user.
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
