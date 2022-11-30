const User = require('../models/users')

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

    await User.create({ name, email, password })
        res.status(201).json({message: 'Successfuly create new user'})
        // 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
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
            if(user[0].password === password){
                res.status(200).json({ success: true, message: 'User Logged In Successfully'})
                // 200 OK success status response code indicates that the request has succeeded.
            } else {
                return res.status(400).json({ success: false, message: 'Password Is Incorrect'})
            } 
         } else {
            return res.status(404).json({ success: false, message: 'User Does Not Exist'})
            // 404 Not Found response status code indicates that the server cannot find the requested resource.
        }
    }catch(err) {
        res.status(500).json({message: err, success: false})
        // 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
    }
}