gsap.from("#main-container", {
  scale: 1,
  duration: 1.5,
  x: -600,
  opacity: 0,
});

gsap.from("#profile-image", {
  scale: 0,
  duration: 1.5,
  delay: 1,
  y: -300,
});
gsap.from("#profile-name", {
    scale: 0,
    duration: 1.5,
    delay: 1,
    x: -300,
    opacity: 0
  });
  
gsap.from("#profile-bio", {
    scale: 0,
    duration: 1.5,
    delay: 1,
    x: 300,
    opacity: 0
  });
  gsap.from("#social-links", {
    scale: 0,
    duration: 1.5,
    delay: 1,
    y: 300,
    opacity: 0
  });

const mainContainer = document.getElementById("main-container")
const checkbox = document.getElementById("checkbox")
const introText = document.getElementById("intro-text")
const socials = document.getElementById("social-links")

const toggle  = document.getElementById("toggle-btn")
toggle.addEventListener("click",() => {
  if(checkbox.checked === true){
    mainContainer.style.backgroundColor = "#192a56"
    introText.style.color = "#dfdfdf"
    socials.style.backgroundColor = "#5352ed"
  
  }else{
    mainContainer.style.backgroundColor= "#ccdddf"
    introText.style.color = "#2f3542"
    socials.style.backgroundColor = "#dfdfdf"
  }
})