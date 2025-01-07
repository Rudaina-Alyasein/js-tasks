let warning = document.getElementsByClassName("warning");

var regex_name = /^[a-zA-Z\s]{5,10}$/;

function validateFname() {
    let fName = document.getElementById("fName").value;
    console.log(fName);  
    if (regex_name.test(fName)) {
        warning[0].style.display = "none";
    } else {
        warning[0].style.display = "block";
        warning[0].innerHTML = "The name should contain only letters and spaces, and be between 5 and 10 characters.";
    }
}

function validateLname() {
    let lName = document.getElementById("lName").value;
    console.log(lName);  
    if (regex_name.test(lName)) {
        warning[1].style.display = "none";
    } else {
        warning[1].style.display = "block";
        warning[1].innerHTML = "The name should contain only letters and spaces, and be between 5 and 10 characters.";
    }
}
function validateBdate(){
    let Bdate = document.getElementById("bDate").value;
    var regex_bdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (regex_bdate.test(Bdate)) {
        warning[2].style.display = "none";
    } else {
        warning[2].style.display = "block";
        warning[2].innerHTML = "THE Format should be dd/mm/yyyy";
    }
}    
function validateEmail(){
    let email=document.getElementById("Email").value;
    var regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regex_email.test(email)){
    warning[3].style.display = "none";

}
else{
    warning[3].style.display = "block";

warning[3].innerHTML=`The e-mail is not valid , should be as <span style="color:black">example@domain.com</span>`

}
}
function compareEmail(){
    let Confirm_Email=document.getElementById("Confirm-Email");
    let email=document.getElementById("Email");

    
    if(email.value===Confirm_Email.value){
        warning[4].style.display = "none";

    }
    else{
        warning[4].style.display = "block"; 
    warning[4].innerHTML = "The email addresses does not match.";
    }

}
function validatePassword(){


    let pass=document.getElementById("password").value;
    var regex_password = /^[A-Z][a-zA-Z0-9]{6,}$/;
    if (regex_password.test(pass)){
        warning[5].style.display="none";

    }
    else{
        warning[5].style.display = "block"; 
        warning[5].innerHTML = "Password should start with a capital letter, contain letters and numbers, and be at least 6 characters long.";
    }


    
}
function comparePassword(){
    let confirm_pass=document.getElementById("Confirm-password").value;
    let pass=document.getElementById("password").value;
if (confirm_pass==pass)
{
    warning[6].style.display="none";

}
else{
    warning[6].style.display = "block"; 
    warning[6].innerHTML = "The Password does not match.";
}

}