// for menu
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".menu-bck-shadow");
const btnshadowClose = document.querySelector(".menu-bck-shadow");

const menuList = document.querySelector(".menu-container");

btnOpen.addEventListener("click", function () {
  menuList.classList.toggle("fix-menu");
  btnshadowClose.classList.toggle("fix");
  document.documentElement.style.overflow = "hidden";
});

btnshadowClose.addEventListener("click", function () {
  document.documentElement.style.overflow = "auto";
  menuList.classList.toggle("fix-menu");
  btnshadowClose.classList.toggle("fix");
});

// =================
// car change color

const headeR = document.querySelector("header"); //header
const btnColor1 = document.querySelector(".color-1");
const btnColor2 = document.querySelector(".color-2");
const btnColor3 = document.querySelector(".color-3");

const header1 = document.querySelector(".header1");
const header2 = document.querySelector(".header2");
const header3 = document.querySelector(".header3");

btnColor1.addEventListener("click", function () {
  headeR.classList.add("header1");
  headeR.classList.remove("header2", "header3");
});

btnColor2.addEventListener("click", function () {
  headeR.classList.add("header2");
  headeR.classList.remove("header1", "header3");
});

btnColor3.addEventListener("click", function () {
  headeR.classList.add("header3");
  headeR.classList.remove("header1", "header2");
});
