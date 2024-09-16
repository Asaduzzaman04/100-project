const button =  document.getElementById('rapple');

button.addEventListener("mouseover", (e) =>{
    const xAxis = e.pageX - button.offsetLeft;
    const yAsis = e.pageY - button.offsetTop;

    button.style.setProperty("--ripX", xAxis + "px")
    button.style.setProperty("--ripy", yAsis + "px")

})