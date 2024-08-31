const input = document.getElementById("input");
const submitBtn = document.getElementById("todd-btn");
const unOrder = document.getElementById("ul")

submitBtn.addEventListener("click",()=>{
  if(input.value === ""){
    alert("Add task first")
  }else{
    const li = document.createElement("li");
    li.innerHTML = `<div class="flex justify-around items-center gap-10">
    <p id="task">${input.value}</p> <i class='bx bx-x' style='color:#ffffff' id="delete" ></i>
    </div> `
    unOrder.appendChild(li)
  
  }

  input.value = "";
  saveData()
})
 
unOrder.addEventListener("click", (e) =>{

  if(e.target.tagName === "LI"){
    e.target.classList.toggle("delete")
  }else if(e.target.tagName === "P"){
      e.target.parentElement.remove
  }
  
},false)
const saveData = ()=> {
  localStorage.setItem("data", unOrder.innerHTML)
}
const showTask = () =>{
  unOrder.innerHTML = localStorage.getItem("data")
}
showTask()
