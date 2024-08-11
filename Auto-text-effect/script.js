const container = document.getElementById("container");

const designation = ["web developer", "web designer", "freelancer"];

const desIndex = 0;

const charIndex = 3;
const update = () => {
  container.innerHTML = `<p class="text">I am a ${designation[desIndex].slice(0,charIndex)} </p>`;
};
update();