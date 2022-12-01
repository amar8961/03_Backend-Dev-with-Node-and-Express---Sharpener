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

    await Expense.create({ expenseamount, description, category }).then((expense) => {
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
  Expense.findAll().then(expenses => {
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
  Expense.destroy({ where: { id: expenseid }}).then(() => {
    return res.status(200).json({ success: true, message: 'Deleted Successfully'})
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ success: true, message: 'Failed'})
  })
}