const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const password2 = document.getElementById('password2')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(checkInputs()){
        window.location.assign("pregame.html");
    }
});

function checkInputs() {
    //valori de la input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let ok = true
    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        ok = false;
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        ok = false;
    } else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid');
        ok = false;
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password,'Password cannot be blank');
        ok = false;
    } else if(passwordValue.length < 8) {
        setErrorFor(password,'Password needs to be longer than 8');
        ok = false;
    } else if(passwordValue.search(/[0-9]/) == -1) {
        setErrorFor(password,'Password needs to contain a number, capital letter and small letter');
        ok = false;
    } else if(passwordValue.search(/[A-Z]/) == -1) {
        setErrorFor(password,'Password needs to contain a number, capital letter and small letter');
        ok = false;
    } else if(passwordValue.search(/[a-z]/) == -1) {
        setErrorFor(password,'Password needs to contain a number, capital letter and small letter');
        ok = false;
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
        ok = false;
	} else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
        ok = false;
	} else{
		setSuccessFor(password2);
    }
    return ok;
}

function setErrorFor(input,message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //adauga mesajul de eroare din small
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function passvalues () {
    var user = document.getElementById("username").value;
    localStorage.setItem("utilizator",user);
    return false;
}