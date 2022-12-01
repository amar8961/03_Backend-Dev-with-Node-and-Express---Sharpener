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