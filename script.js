// Variables
const chevronDown = document.querySelector(".chevron-down");
const chevronRight = document.querySelector(".chevron-right");
const chevronLeft = document.querySelector(".chevron-left");

// Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".chevron-right",
    prevEl: ".chevron-left",
  },
  loop: true,
  initialSlide: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Animation parameters for chevron down
const animationParamsDown = {
  initialTop: parseFloat(getComputedStyle(chevronDown).top),
  amplitude: 10,
  frequency: 0.003,
};

// Animation parameters for chevron right
const animationParamsRight = {
  initialLeft: parseFloat(getComputedStyle(chevronRight).right),
  amplitude: 10,
  frequency: 0.0015,
};

// Animation parameters for chevron left
const animationParamsLeft = {
  initialLeft: parseFloat(getComputedStyle(chevronLeft).left),
  amplitude: 10,
  frequency: 0.0015,
};

// Chevron down animation
function updateArrowPositionDown(timestamp) {
  const deltaY =
    animationParamsDown.amplitude *
    Math.sin(animationParamsDown.frequency * timestamp);
  chevronDown.style.top = animationParamsDown.initialTop + deltaY + "px";

  requestAnimationFrame(updateArrowPositionDown);
}

// Chevron right animation
function updateArrowPositionRight(timestamp) {
  const deltaX =
    animationParamsRight.amplitude *
    Math.sin(-animationParamsRight.frequency * timestamp);
  chevronRight.style.right = animationParamsRight.initialLeft + deltaX + "px";

  requestAnimationFrame(updateArrowPositionRight);
}

// Chevron left animation
function updateArrowPositionLeft(timestamp) {
  const deltaX =
    animationParamsLeft.amplitude *
    Math.sin(animationParamsLeft.frequency * timestamp);
  chevronLeft.style.left = animationParamsLeft.initialLeft - deltaX + "px";

  requestAnimationFrame(updateArrowPositionLeft);
}

// Start animations
requestAnimationFrame(updateArrowPositionDown);
requestAnimationFrame(updateArrowPositionRight);
requestAnimationFrame(updateArrowPositionLeft);

// Burger-menu
function closeMenu() {
  document.getElementById("navi-toggle").checked = false;
}
