async function login(e) {
    try {
    e.preventDefault();
    console.log(e.target.email);

    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    console.log(loginDetails)

    await axios.post('http://localhost:3000/user/login', loginDetails).then(response => {
        alert(response.data.message)
        if(response.status === 200) {
            // 200 OK success status response code indicates that the request has succeeded.
            window.location.href = "../Expense/expense.html" // change the page on successful login
        } else {
            throw new ErrorEvent('Failed to login')
        }
    })
    } catch (err) {
        console.log(JSON.stringify(err))
        // JSON.stringify() method converts a JavaScript value to a JSON string.
        document.body.innerHTML += `<div style="color:red;">${err.message}<div>`;
    }
}