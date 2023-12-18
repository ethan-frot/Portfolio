// Variables
const chevronDown = document.querySelector(".chevron-down");

// Initialisation
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".chevron-right",
    prevEl: ".chevron-left",
  },
  loop: true,
  initialSlide: 2,
});

// Add event on click
swiper.on("slideChangeTransitionEnd", () => {
  updateArrowPosition();
});

// Chevron down animation
const animationParams = {
  initialTop: parseFloat(getComputedStyle(chevronDown).top),
  amplitude: 10,
  frequency: 0.003,
};

function updateArrowPosition(timestamp) {
  const deltaY =
    animationParams.amplitude * Math.sin(animationParams.frequency * timestamp);
  chevronDown.style.top = animationParams.initialTop + deltaY + "px";

  requestAnimationFrame(updateArrowPosition);
}

requestAnimationFrame(updateArrowPosition);
