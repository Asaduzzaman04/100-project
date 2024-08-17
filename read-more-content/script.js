const btn = document.getElementById("btn-more")
const moreText = document.getElementById("more-text");

btn.addEventListener("click", () =>{
    moreText.style.display = "inline-block";
    btn.innerHTML = ""
    btn.classList.add("clear")
})
console.log(btn);