const arrowright = document.querySelector(".arrowright");
const arrowleft = document.querySelector(".arrowleft");
const sliders = document.querySelectorAll(".main_tables_container");
document.addEventListener("click", (e) => {
  if (e.target == arrowright) {
    e.preventDefault();
    sliders[0].classList.remove("active");
    sliders[1].classList.add("active");
  }
  if (e.target == arrowleft) {
    e.preventDefault();
    sliders[1].classList.remove("active");
    sliders[0].classList.add("active");
  }
});
