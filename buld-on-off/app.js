const btn = document.getElementById("btn")
const img = document.getElementById("image")

const btnClick = () =>{
    if(btn.textContent.includes("on")){
    img.src = "./assets/Light Bulb Png - Transparent Light Bulb PNG Transparent With Clear Background ID 166931 _ TopPNG.jpg"
    btn.textContent = "turn off"
    }else{
        img.src = "./assets/HD Light Bulb On Off PNG.jpg"
        btn.textContent = "turn on"
    }

}
btn.addEventListener("click", btnClick)