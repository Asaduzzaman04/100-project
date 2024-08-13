const base = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const input = document.getElementById("qr-input");
const submit = document.getElementById("qr-btn");
const qrImg = document.getElementById("qr-img")

submit.addEventListener("click",() =>{
    if(input.value === ""){
        alert("put link first")
    }else{
        const inputValue =  input.value;
        qrImg.src = `${base}${inputValue}`
    }
})