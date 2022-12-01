async function saveToLocalStorage(e) {
    try{
        e.preventDefault();
        console.log(e.target.description.value);

        const addExpense = {
            expenseamount: e.target.amount.value,
            description: e.target.description.value,
            category: e.target.category.value
        }
        console.log(addExpense)

        const response = await axios.post('http://localhost:3000/expense/addExpense', addExpense).then(response => {
                alert(response.data.message)
        })
        
    } catch(err) {
        document.body.innerHTML += `<div style="color:red;">${err} </div>`
    }
}

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', async () => {
    try{
        await axios.get('http://localhost:3000/expense/getExpense').then(response => {
            response.data.expenses.forEach(expense => {
                addNewExpensetoUI(expense);
            })
        })
    } catch(err){
        console.log(err)

    }
})

// Show Expense to DOM / UI
function addNewExpensetoUI(expense) {
    const parentElement = document.getElementById('expenseTracker');
    const expenseElemId = `expense-${expense.id}`;
    parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ${expense.expenseamount} - ${expense.category} - ${expense.description}
            
        </li>`
}