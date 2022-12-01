const jwt = require('jsonwebtoken');
const User = require('../models/users');

const authenticate = (req, res, next) => {

    try {
        const token = req.header('Authorization');
        console.log(token);
        const user = jwt.verify(token, 'secretkey');
        console.log('userID >>>>', user.userId);
        User.findByPk(user.userId).then(user => {
            // console.log(JSON.stringify(user));
            
            // here we can add condition if usr not found send 404.

            req.user = user; // Very Important Line -> req is a global object because req is common in Auth and getExpense.
            next();
        })

      } catch(err) {
        console.log(err);
        return res.status(401).json({success: false})
        // err
      }

}

module.exports = {
    authenticate
}