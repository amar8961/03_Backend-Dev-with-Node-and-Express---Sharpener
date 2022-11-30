async function login(e) {
    try {
    e.preventDefault();
    console.log(e.target.email);

    const loginDetails = {
        email: e.target.email.value,
        password: e.terget.password.value
    }
    console.log(loginDetails)

    await axios.post('http://localhost:3000/user/login', loginDetails).then(response => {
        aleart(response.data.message)
    })
    } catch (err) {
        console.log(JSON.stringify(err))
        // JSON.stringify() method converts a JavaScript value to a JSON string.
        document.body.innerHTML += `<div style="color:red;">${err.message}<div>`;
    }
}