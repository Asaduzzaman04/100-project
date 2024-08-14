const passInput = document.getElementById("pass-input");
const passStr = document.getElementById("pass-chk");

passInput.addEventListener("keyup", ()=>{
    if(passInput.value.length < 5){
        passStr.innerText = "your password is to weak"
         passStr.style.color = `#ff2116`
    }else if(passInput.value.length > 7 ){
        passStr.innerText = "strong password"
        passStr.style.color = `#7bed9f`
    }
   
})