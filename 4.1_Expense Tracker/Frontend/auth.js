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

signUpBtn.addEventListener('click', signUp)

function signUp(){
    const name=document.getElementById('name-up').value
    const email=document.getElementById('email-up').value
    const password=document.getElementById('pass-up').value
    if (name.length<3 || !isNaN(name) || name==" "){
        alert("Enter a valid name!")
    }
    else if (email.length<5 || email.indexOf('@')==-1){
        alert("Enter a valid email!")
    }
    else if(password.length<4){
        alert("Enter a strong password!")
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

