// Import
const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// for string validation
function isstringinvalid(string) {
    if(string == undefined || string.length === 0) {
        return true
    } else {
        return false
    }
}

// signup
exports.signup = async (req, res) => {
    try{
    const { name, email, password } = req.body;

    // if name / email / password is Validation / Missing.
    if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)) {
        return res.status(400).json({err: "Bad parameters . Something is missing"})
        // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
    }

    const saltrounds = 10;
    bcrypt.hash(password, saltrounds, async (err, hash) => {
        console.log(err)
        await User.create({ name, email, password: hash }) // hash password
        res.status(201).json({message: 'Successfuly create new user'})
        // 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
    })
    } catch(err) {
        res.status(500).json(err);
        // 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
    }
}

// login
exports.login = async (req, res) => {
    try {
    const { email, password } = req.body;

    // // if email / password is Validation / Missing.
    if(isstringinvalid(email) || isstringinvalid(password)) {
        return res.status(400).json({ message: 'Email or Password is missing', success: false})
        // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
    }
    console.log(password);

    const user = await User.findAll({ where : { email }})
        if(user.length > 0){
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(err){
                    res.status(500).json({success: false, message: 'Something went wrong'})
                }
                // if we got correct password and Logged In Successfully. it mean result is true.
                if(result === true){
                    // res.status(200).json({ success: true, message: 'User Logged In Successfully', token: generateAccessToken(user[0].id)})
                    // 200 OK success status response code indicates that the request has succeeded.
                    if(user[0].ispremiumuser === true){
                        // check prime user or not
                        console.log("PRIME USER")
                        res.status(200).json({ success: true, message: 'GOT PRIME USER', token: generateAccessToken(user[0].id) })
                    } else {
                        console.log("NOT A PRIME USER")
                        res.status(200).json({ success: false, message: 'NON PRIME USER', token: generateAccessToken(user[0].id) })
                    }
                } else {
                    return res.status(400).json({ success: false, message: 'Password Is Incorrect'})
                } 
            })
         } else {
            return res.status(404).json({ success: false, message: 'User Does Not Exist'})
            // 404 Not Found response status code indicates that the server cannot find the requested resource.
        }
    }catch(err) {
        res.status(500).json({message: err, success: false})
        // 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
    }
}

// Generate Token
function generateAccessToken(id) {
    return jwt.sign({ userId : id}, process.env.BCRYPT_SECRETKEY )
}
