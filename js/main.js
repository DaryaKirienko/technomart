var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const modalMap = document.querySelector(".modal-map");
const modalFeedback = document.querySelector(".modal-feedback");
const closeMap = document.querySelector(".close-map");
const closeFeedback = document.querySelector(".close-feedback");
const openMap = document.querySelector(".open-map");
const openFeedback = document.querySelector(".open-feedback");

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

openFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
});

closeMap.addEventListener("click", () => {
  modalMap.classList.remove("modal-show");
});

closeFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("modal-show");
});

const deliveryBut = document.querySelector(".delivery-button");
const guaranteeBut = document.querySelector(".guarantee-button");
const creditBut = document.querySelector(".credit-button");
const deliveryInfo = document.querySelector(".delivery-info");
const guaranteeInfo = document.querySelector(".guarantee-info");
const creditInfo = document.querySelector(".credit-info");

deliveryBut.addEventListener("click", () => {
  deliveryBut.classList.add("is-active");
  deliveryInfo.classList.add("is-active");
  guaranteeBut.classList.remove("is-active");
  creditBut.classList.remove("is-active");
  guaranteeInfo.classList.remove("is-active");
  creditInfo.classList.remove("is-active");
});

guaranteeBut.addEventListener("click", () => {
  guaranteeInfo.classList.add("is-active");
  guaranteeBut.classList.add("is-active");
  deliveryBut.classList.remove("is-active");
  creditBut.classList.remove("is-active");
  deliveryInfo.classList.remove("is-active");
  creditInfo.classList.remove("is-active");
});

creditBut.addEventListener("click", () => {
  creditBut.classList.add("is-active");
  creditInfo.classList.add("is-active");
  guaranteeBut.classList.remove("is-active");
  deliveryBut.classList.remove("is-active");
  guaranteeInfo.classList.remove("is-active");
  deliveryInfo.classList.remove("is-active");
});
