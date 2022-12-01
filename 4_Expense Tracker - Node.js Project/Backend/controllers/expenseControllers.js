const Expense = require("../models/expense");

// for string validation
function isstringinvalid(string) {
    if(string == undefined || string.length === 0) {
        return true
    } else {
        return false
    }
}

// Add Expense
exports.addExpense = async (req, res) => {
  try {
    const { expenseamount, description, category } = req.body;

    // if name / email / password is Validation / Missing.
    if(isstringinvalid(expenseamount)) {
        return res.status(400).json({err: "Bad parameters . Something is missing"})
        // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
    }

    // req.user.addExpense({ expenseamount, description, category }).then((expense) => {    // // Magic Function
    await Expense.create({ expenseamount, description, category, userId: req.user.id }).then((expense) => {
        return res.status(201).json({ expense, success: true, message: "Expense Added to DB" });
        // 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
      }
    );
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
    // 500 Internal Server Error server error response code
  }
};

// Get Expense
exports.getExpense = (req, res) => {
  try{
  // req.user.getExpense().then(expenses => {   // // Magic Function 
  Expense.findAll({ where : {userId: req.user.id}}).then(expenses => {
    return res.status(200).json({expenses, success:true})
  })
  }catch(err) {
    return res.status(500).json({ error: err, success: false})
  }
}

// Delete
exports.deleteExpense = (req, res) => {
  const expenseid = req.params.expenseid;
  
  // if expenseid is Validation / Missing.
  if(isstringinvalid(expenseid)) {
    return res.status(400).json({success: false, message: 'Error Expense Id'})
    // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
  
  }
  Expense.destroy({ where: { id: expenseid, userId: req.user.id }}).then((noOfRows) => {
    if(noOfRows === 0){
      return res.status(404).json({success: false, message: 'Expense does not belog to the user'})
    }
    return res.status(200).json({ success: true, message: 'Deleted Successfully'})
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ success: true, message: 'Failed'})
  })
}