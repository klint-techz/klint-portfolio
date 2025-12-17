window.addEventListener("load", () => {
  const typedText = document.getElementById("preloader");
  const text = "Klint-techz...";
  const cursor = document.querySelector("typing-cursor");
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 200); // typing speed
    } else {
      // After typing finishes, wait 0.5s then fade out preloader
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = 0;
        setTimeout(() => (preloader.style.display = "none"), 2500);
      }, 500);
    }
  }

  typeLetter(); // start typing after window loads
});
/* MOBILE MENU */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* GLASS NAVBAR ON SCROLL */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* TYPING ANIMATION (FIXED) */
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");

  if (!typingElement) return; // prevents crash

  const skills = [
    "Web Developer",
    "Video-Editor",
    "Graphic Designer",
    "Digital Marketer",
    "Content Creator."
  ];

  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentSkill = skills[skillIndex];

    if (!isDeleting) {
      typingElement.textContent = currentSkill.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentSkill.length) {
        setTimeout(() => (isDeleting = true), 1500);
      }
    } else {
      typingElement.textContent = currentSkill.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();
});

/* PARTICLES (SAFE LOAD) */
window.addEventListener("load", () => {
  if (typeof particlesJS === "undefined") return;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 1200 }
      },
      color: { value: "#3498db" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 1.9 },
      line_linked: {
        enable: true,
        distance: 80,
        color: "#e10600",
        opacity: 0.3,
        width: 1
      },
      move: { enable: true, speed: 1.5, random: true, straight: false }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });
});


/* ===========================
   SCROLL REVEAL ANIMATION
   =========================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
