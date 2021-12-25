let form= document.querySelector("#loginForm");
// Ecouter la modification de l'email
form.email.addEventListener("change", function(){
    validerEmail(this)
})

//Ecouter la modification de password
form.password.addEventListener("change", function(){
    validerPassword(this)
})

//Ecouter la soumission du formulaire
form.addEventListener("submit", function(e){
    e.preventDefault()
    if(validerEmail(form.email) && validerPassword(form.password)){
        form.submit();
    }
})


//Validation Email
    const validerEmail= function(inputEmail){
    let emailRegex= new RegExp("^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$","g");

    let testEmail= emailRegex.test(inputEmail.value);
    let small= inputEmail.nextElementSibling;

   if(testEmail){
        small.innerHTML="l'adresse Email est valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
   }else{
       small.innerHTML="l'adresse Email n'est pas valide";
       small.classList.add("text-success");
       small.classList.add("text-danger");
       return false;
   }
}
// Fin Validation Email


// Validation password

const validerPassword= function(inputPassword){
    let msg;
    let valide=false;
    // au moins 3 caractère
    if(inputPassword.value.length <3){
        msg="le mot de passe doit contenir au moins 3 caractères";
    }
    //au moins une majuscule
    else if(!/[A-Z]/.test(inputPassword.value)){
        msg="le mot de passe doit contenir au moins une majuscule";
    }
    // au moins une minuscule
    else if(!/[a-z]/.test(inputPassword.value)){
        msg="le mot de passe doit contenir au moins une minuscule";
    }
    // au moins une chiffre
    else if(!/[0-9]/.test(inputPassword.value)){
        msg="le mot de passe doit contenir au moins un chiffre";
    }
    else{
        msg="le mot de passe est valide";
        valide=true;
    }

    // ******   ////

    let small= inputPassword.nextElementSibling;

    if(valide){
         small.innerHTML="le mot de passe est valide";
         small.classList.remove("text-danger");
         small.classList.add("text-success");
         return true;
    }else{
        small.innerHTML=msg;
        small.classList.add("text-success");
        small.classList.add("text-danger");
        return false;
    }
}

//Fin Validation password