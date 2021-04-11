let phone=document.getElementById("phonenumber");
let nova=document.getElementById("nova");
let email=document.getElementById("emailidgiven");
let error=document.getElementById("errored");
let password=document.getElementById("inputPassword");
let password2=document.getElementById("confirmPassword4")
let msg=document.getElementById("confirmpwd1");
    function  phonecheck()
    {
let regexp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexp.test(phone.value))
    {
        nova.innerHTML="You have added phone number successfully";
        nova.style.color="GREEN";
        return true;
    }
    else{
        nova.innerHTML="please add correct phone number";
        nova.style.color="red";
        return false;
    }
    }
     
 function validates()
     {
     let regexps =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(regexps.test(email.value))
        {
         error.innerHTML="You have entered a valid email";
         error.style.color="green";
         return true;
     }
     else{
         error.innerHTML="Please enter a correct email ID";
         error.style.color="RED";
         return false;
     }
    }
   //tocheckpassword1/,
    function validatePassword() {
        var p = document.getElementById('inputPassword').value,
            errors = [];
        if (p.length < 8) {
            errors.push("Your password must be at least 8 characters");
        }
        if (p.search(/[a-z]/) < 0) {
            errors.push("Your password must contain at least one  lower case letter."); 
        }
        if (p.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit.");
        }
        if (p.search(/[A-Z]/) <0 ){
            errors.push("Your password should contain atleast one uppercase letter");
        }
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
        }
        return true;
    }
  //end here//
//another code for password//
  var strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}
// var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    var val = password.value;
    var result = zxcvbn(val);
  
    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
    }
    else {
        text.innerHTML = "";
    }
});
function confirmation()
{
    var pwd= document.getElementById("inputPassword");
    if (pwd==password2)
    {
        return false;
 
    }
    else{
        msg.innerHTML="Password not matching!!! Please check";
        msg.style.color="red";
    }
}
//ends here//
