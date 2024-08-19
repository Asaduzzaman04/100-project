const inpPass = document.querySelector("input");
const showPass = document.querySelector("i");

showPass.addEventListener("click", () =>{
   if(inpPass.value === ""){
    alert("Enter passwor")
   }else{
    showPass.classList.toggle("bx-show");
    if(inpPass.type === "password"){
        inpPass.setAttribute("type", "text")
    }else{
        inpPass.setAttribute("type", "password")
    }
   }
})