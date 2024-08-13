const accordionButtons = document.querySelectorAll(".accordion button");

for (btn of accordionButtons) btn.addEventListener("click", accordionBtnHandler);

function accordionBtnHandler() {
  this.nextElementSibling.classList.toggle("expanded");
  this.querySelector(".vertical-line").classList.toggle("translated");
}
