const loginClose = document.querySelector(".close-container");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openAccountBtn = document.querySelectorAll(".btn");
const nav = document.querySelector(".nav");
const btnScroolTo = document.querySelector(".section1__btn--scrool-to");
const section1 = document.querySelector(".section1");
//const modalOpenAccount = document.querySelector(".modal_btn");
function OpenCloseLogin() {
  if (!modal.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  } else {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}
openAccountBtn.forEach((i) => {
  i.addEventListener("click", OpenCloseLogin);
});

loginClose.addEventListener("click", OpenCloseLogin);
overlay.addEventListener("click", OpenCloseLogin);

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape" && !modal.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});

btnScroolTo.addEventListener("click", function () {
  const coordinates = section1.getBoundingClientRect();
  console.log(coordinates);
});
//nav.style.height = "120rem";
