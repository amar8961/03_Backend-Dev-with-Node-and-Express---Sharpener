// Welcome Screen
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Start
let UserUrl="http://localhost:4000/users"
let signUpBtn=document.getElementById("sign-up-btn")
let signInBtn=document.getElementById("sign-in-btn")

signUpBtn.addEventListener('click', signUp)
signInBtn.addEventListener('click', signIn)

// Sign up
function signUp(){
    const name=document.getElementById('name-up').value
    const email=document.getElementById('email-up').value
    const password=document.getElementById('pass-up').value
    if (name.length<3 || !isNaN(name) || name==" "){
        alert("Enter a valid name!")
        return
    }
    else if (email.length<5 || email.indexOf('@')==-1){
        alert("Enter a valid email!")
        return
    }
    else if(password.length<4){
        alert("Enter a strong password!")
        return
    }else{
        document.getElementById('name-up').value=""
        document.getElementById('email-up').value=""
        document.getElementById('pass-up').value=""
    }
    axios({
        method: 'post',
        url: `${UserUrl}`,
        data:{
            name: name,
            email:email,
            password:password
        }
    }).then(response=>{
        console.log(response)
        if(response.data[1]==false){
            alert("You already have an account with us! Please Login...")
        }
        else{
            alert("Sign Up Successful")
            window.location.replace("./index.html");
        }
    }).catch(err=>console.log(err))
}

// Sign in
signInBtn.addEventListener('click', signIn)

function signIn(){
    const email=document.getElementById('email-in').value
    const password=document.getElementById('pass-in').value
    if (email.length<5 || email.indexOf('@')==-1){
        alert("Enter a valid email!")
        return
    }
    else{
        document.getElementById('email-in').value=""
        document.getElementById('pass-in').value=""
    }
    axios({
        method: 'get',
        url: `${UserUrl}/${email}`,
    }).then(response=>{
        console.log(response)
        if (response.data==""){
            alert("Your email is not registered with us!")
        }else if(response.data.password!==password){
            alert("You've entered an incorrect password!")
        }else{
            alert("Sign In Successful!")
            location.replace('./index.html')
        }
    }).catch(err=>console.log(err))
}
