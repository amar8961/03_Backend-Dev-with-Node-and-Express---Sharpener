async function signup(e) {
    try{
        e.preventDefault();
        console.log(e.target.email.value);

        const signupDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(signupDetails)

        const response = await axios.post('#', signupDetails)
        if(response.status === 200) {
            windows.location.href = "#" // change the page on successful login
        } else {
            throw new ErrorEvent('Failed to login')
        }

    } catch(err) {
        document.body.innerHTML += `<div style="color:red;">${err} </div>`
    }
}