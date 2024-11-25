const typewriter = document.querySelector("#text");
const typeText = ["Welcome to my website!", "welcome to my portfolio"," i am a web developer"];

let index = 1;
let currentTextIndex = 0;

// ! => Start the typewriter animation function
const typeAimation = () => {
  const textIndex = typeText[currentTextIndex];
  if (index <= textIndex.length) {
    typewriter.innerText = textIndex.slice(0, index);
    index++;
  } else {
    index = 1;
    currentTextIndex++;
    if (currentTextIndex >= typeText.length) {
      currentTextIndex = 0;
    }
  }
  setTimeout(() => typeAimation(), 200);
};

typeAimation();
