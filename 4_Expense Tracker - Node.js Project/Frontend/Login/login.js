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
        // console.log(response)
        localStorage.setItem('token', response.data.token) // to save the token in local storage.
        if(response.status === 200) {
            // 200 OK success status response code indicates that the request has succeeded.
            if(response.data.success === true){
                console.log("GOT PRIME ONE")
                window.location.href = "../Expense/expensePrimeUser.html" // change the page on successful login
            } else {
                window.location.href = "../Expense/expense.html" // change the page on successful login
            }
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

// Forgot Password
function forgotpassword() {
    window.location.href = "../Forgot Password/forgotPassword.html"
}