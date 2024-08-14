const input = document.getElementById("input");
const countBtn = document.getElementById("btn");
const output = document.getElementById("count");

countBtn.addEventListener("click", () => {
  const val = input.value;
  if (val === "") {
    alert("write some text first");
  } else {
    let  count = 0;
    for (let i = 0; i < val.length; i++) {
      if (
        val[i] == "a" ||
        val[i] == "e" ||
        val[i] == "i" ||
        val[i] == "o" ||
        val[i] == "u"
      ) {
        count++;
      }
    }
    output.innerText = `total vawel is  ${count}`;
  }
  input.value = ""
});
