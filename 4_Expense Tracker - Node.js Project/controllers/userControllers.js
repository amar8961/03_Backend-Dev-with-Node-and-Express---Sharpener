const User = require('../models/users')

function isstringinvalid(string) {
    if(string == undefined || string.length === 0) {
        return true
    } else {
        return false
    }
}

exports.signup = async (req, res) => {
    try{
    const { name, email, password } = req.body;

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