const input = document.getElementById("input");
const output = document.getElementById("pounds");

input.addEventListener("keyup", () =>{
    const kg = input.value;
    const pound = kg * 2.2
    output.innerText = pound.toFixed(2)
})