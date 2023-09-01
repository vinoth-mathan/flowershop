let name=document.getElementById("name");
let password=document.getElementById("password");
let email=document.getElementById("e-mail");

let naeror=document.getElementById("na-eror");

let paseror=document.getElementById("pas-eror");

let emaileror=document.getElementById("em-eror");

let btn=document.getElementById("submit");

let regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;


btn.addEventListener('click',(e)=>{
    e.preventDefault();

  let  nameVal=name.value.trim();
 let   passwordVal=password.value.trim();
  let  emailVal=email.value.trim();

    validationName(nameVal);
    validationPassword(passwordVal);
    validationeEmail(emailVal);
  
})

//  function setError(){

//  }

function validationName(nameVal){
    if(nameVal==""){
         naeror.innerHTML="name is required"
         name.style.border="2px solid red";
         return false;
    }
    if(nameVal.length<3){
        naeror.innerHTML=" Characters should not less than 3";
        nameVal.focus();
        name.style.border="2px solid red"
        return false;
       
    }
    naeror.innerHTML="";
    name.style.border="solid green 3px";
  return ture;  
}

function validationPassword(passwordVal){
    if(passwordVal==""){
        paseror.innerHTML="password is required"
        password.style.border="2px solid red"
        return false;
        
    }
    // if(passwordVal.length<8){
    //     paseror.innerHTML="Characters should not less than 8"
    //     password.style.border="2px solid red"
    //     return false;
    // }

    paseror.innerHTML="";
    password.style.border="3px solid green"
    return ture;
}
function validationeEmail(emailVal){
    if(emailVal==""){
        // console.log(emailVal);
    emaileror.innerHTML="e-mail is required"
    email.style.border="2px solid red "
    return false;
    }
    else if(!emailVal.match(regex)){
        emaileror.innerHTML="enter a vaild e-mail";
        email.style.border="2px solid red "
        return false;
    }
    else{
        email.innerHTML="";
        email.style.border="3px solid green";
        return ture;
    }

}
