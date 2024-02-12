let exampleInputEmail1 = document.getElementById('exampleInputEmail1')
let emailErrorMsg = document.getElementById('email-error-msg')
let exampleInputPassword1 = document.getElementById('exampleInputPassword1')
let pswdErrorMsg = document.getElementById('pswd-error-msg')

let fName = document.getElementById('fName')
let lName = document.getElementById('lName')

// function to validate email address 
function validateEmail(){
    if(!exampleInputEmail1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErrorMsg.style.display = 'inline';
        exampleInputEmail1.style.border = "2px solid red"
        return false;
    }
    else{
        emailErrorMsg.style.display = 'none'
        exampleInputEmail1.style.border = 'none'
        return true;       
    }
}

// function to check the input fields are not null 
function verifyField(){
    event.preventDefault();
    if(exampleInputEmail1.value === "" ||  exampleInputPassword1.value === ""){
       alert("Enter a valid email and password");
    }else{

    }
}

// To validate pswd on sign-up page 
function validatePswd(){
    let pswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!exampleInputPassword1.value.match(pswd)){
        pswdErrorMsg.style.display = 'inline';
        exampleInputPassword1.style.border = '2px solid red';
        return false;
    }else{
        pswdErrorMsg.style.display = 'none';
        exampleInputPassword1.style.border = 'none';
        return true;
    }
}

// Verify Every field must contain value (sign-up page)
function verifyFields(){
    if(fName.value === "" || lName.value === ""){
        alert("Name fields should not be empty !");
        return false;
    }else if(exampleInputEmail1.value === ""){
        alert("Enter an email address !")
        return false;
    }else if(exampleInputPassword1.value === ""){
        alert("Account should be password protected !")
        return false;
    }

}