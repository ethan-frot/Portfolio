// Variables
const chevronDown = document.querySelector(".chevron-down");
const languagesContent = document.querySelectorAll(".language-content");
const userLanguage = localStorage.getItem("userLanguage");

// Swiper initialization
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  initialSlide: 2,
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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

// Chevron down animation
function updateArrowPositionDown(timestamp) {
  const deltaY =
    animationParamsDown.amplitude *
    Math.sin(animationParamsDown.frequency * timestamp);
  chevronDown.style.top = animationParamsDown.initialTop + deltaY + "px";

  requestAnimationFrame(updateArrowPositionDown);
}

// Start animations
requestAnimationFrame(updateArrowPositionDown);

// Burger-menu
function closeMenu() {
  document.getElementById("navi-toggle").checked = false;
}

// English or French
function changeLanguage(lang) {
  localStorage.setItem("userLanguage", lang);
}

// Check if user language is already set in localStorage
if (!userLanguage) {
  // Language not in LocalStorage, check browserLanguage
  const browserLanguage = navigator.language.substring(0, 2);

  if (browserLanguage === "fr") {
    localStorage.setItem("userLanguage", "fr");
    // Redirect if setting French as default
    if (!window.location.href.includes("/public/fr.html")) {
      window.location.href = "/public/fr.html";
    }
  } else {
    localStorage.setItem("userLanguage", "en");
    // Redirect if setting English as default
    if (!window.location.href.includes("../")) {
      window.location.href = "../";
    }
  }
}

// Determine current language from URL
const currentLanguage = window.location.href.includes("/public/fr.html")
  ? "fr"
  : "en";

// Redirect if user language is different from current language
if (userLanguage !== currentLanguage) {
  if (userLanguage === "fr" && currentLanguage === "en") {
    window.location.href = "/public/fr.html";
  } else if (userLanguage === "en" && currentLanguage === "fr") {
    window.location.href = "../";
  }
}

// Change the localStorage language when clicking
languagesContent.forEach((languageContent) => {
  languageContent.addEventListener("click", (e) => {
    e.preventDefault();
    if (userLanguage === "fr") {
      changeLanguage("en");
      window.location.href = "../";
    } else {
      changeLanguage("fr");
      window.location.href = "/public/fr.html";
    }
  });
});
