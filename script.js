const navItems = document.querySelectorAll(".nav-item");
const selector = document.querySelector(".selector");
const chevronDown = document.querySelector(".chevron-down");
const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");
const cardContainer = document.querySelectorAll(".card-container");
const cardContentContainer = document.querySelectorAll(
  ".card-content-container"
);

const cards = Array.from(document.querySelectorAll(".card"));

let cardIndex = 2;

function hideCard() {
  cardContentContainer[cardIndex].classList.add("hidden");
  cardContainer[cardIndex].classList.add("hide-card-container");
}

function showCard() {
  cardContentContainer[cardIndex].classList.remove("hidden");
  cardContainer[cardIndex].classList.remove("hide-card-container");
}

function switchCard(newIndex) {
  hideCard();

  setTimeout(() => {
    cards[cardIndex].style.display = "none";
    cardIndex = newIndex;
    cards[cardIndex].style.display = "flex";

    // Ajouter la classe pour afficher le reste du contenu
    cardContainer[cardIndex].classList.add("show-card-container");

    // Appeler la fonction pour afficher le reste du contenu
    showCard();
  }, 1000); // Attendre 1 seconde pour l'animation de masquage
}

chevronLeft.addEventListener("click", () => {
  switchCard((cardIndex - 1 + cards.length) % cards.length);
});

chevronRight.addEventListener("click", () => {
  switchCard((cardIndex + 1) % cards.length);
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
