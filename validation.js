let email=document.getElementById("exampleInputEmail1");
let error=document.getElementById("error");
let password=document.getElementById("inputPassword");

 function validate(){
     let regexp =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(regexp.test(email.value))
        {
         error.innerHTML="You have entered correct email format";
         error.style.color="green";
         return true;
     }
     else{
         error.innerHTML="Please check the format of the email";
         error.style.color="RED";
         return false;
     }
    }