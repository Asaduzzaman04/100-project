const btnCont = document.querySelector(".btn-container");

const kits = ["crash", "kick", "snare", "tom"];

const kitsBtn = () => {
  kits.forEach((e) => {
    const btnEl = document.createElement("button");
    btnEl.innerText = e;
    btnCont.appendChild(btnEl);
    const audio = document.createElement("audio");
    btnCont.appendChild(audio);
    audio.src = `./audio/${e}.mp3`;
    btnEl.addEventListener("click", ()=>{
        audio.play()
    })
  });
};
kitsBtn();
