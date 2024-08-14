const passInput = document.getElementById("pass-input");
const passStr = document.getElementById("pass-chk");


passInput.addEventListener("keyup", () => {

  if (passInput.value.length <= 7) {

    passStr.innerText = "your password is to short" ;
    passStr.style.color = `#ff2116`;

  } else if (passInput.value.length >= 8) {

    if (passInput.value.search(/[a-z]/) == -1) {

      passStr.innerText = "your pass missing short caracter";
      passStr.style.color = "#ff2116";

    } else if (passInput.value.search(/[A-Z]/) == -1) {

      passStr.innerText = "your pass missing captial caracter";
      passStr.style.color = "#ff2116";

    }else if(passInput.value.search (/[0-9]/) == -1){
        passStr.innerText = "your pass missing Numaric caracter";
        passStr.style.color = "#ff2116";
    }else{
        passStr.innerText = "your pass is strong";
        passStr.style.color = "#27ae60";
    }

  }

});