const textArea = document.querySelector("textarea")
const voiceBtn = document.querySelector("button");

const speech = (text) =>{
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance)
}
voiceBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(textArea.value === ""){
        alert("enter text to convet speech")
    }else(
        speech(textArea.value)
    )
})