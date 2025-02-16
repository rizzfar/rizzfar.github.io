const loader = document.getElementById('loader');
const appContainer = document.getElementById('app-container');
const darkModeBtn = document.getElementById('dark-mode-btn');
const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const currentPage = document.getElementById("current-page");
const totalPages = document.getElementById("total-pages");

let index = 0;
  const totalSlides = slideElements.length;
  totalPages.textContent = totalSlides;

  function updateCarousel() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentPage.textContent = index + 1;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      index = i;
      updateCarousel();
    });
  });

  // Auto-play carousel
  let autoPlay = setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 3000);

  // Pause auto-play on hover
  document.querySelector(".carousel").addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
  });

  document.querySelector(".carousel").addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => {
      index = (index + 1) % totalSlides;
      updateCarousel();
    }, 3000);
  });

  updateCarousel(); // Set initial state

setTimeout(() => {
  loader.style.display = 'none';
  appContainer.style.display = 'block';
}, 3000)

document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const darkModeIcon = document.getElementById("dark-mode-icon");

  darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (darkModeIcon.classList.contains("fa-sun")) {
          darkModeIcon.classList.replace("fa-sun", "fa-moon");
      } else {
          darkModeIcon.classList.replace("fa-moon", "fa-sun");
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");

  menuClose.addEventListener("click", function () {
    menuToggle.checked = true;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const words = ["Software Engineer", "Frontend Dev", "UI/UX Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    let currentWord = words[wordIndex];
    let currentText = currentWord.substring(0, charIndex);
    textElement.innerHTML = currentText + '<span class="typing"></span>';

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");

  function showHero() {
    heroSection.classList.add("show");
  }

  setTimeout(showHero, 3000); 
});
