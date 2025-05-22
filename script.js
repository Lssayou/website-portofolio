//intro
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 3000);
});

// header
const images = document.querySelectorAll(".carousel img");
let current = 0;

setInterval(() => {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}, 3000);

const typedText = document.getElementById('typedText');
const cursor = document.getElementById('cursor');
const introText = document.getElementById('introText');

const textToType = `"Hi, I'm Lisa Dian Maryam. You can call me Lisa"`;
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typedText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    cursor.classList.remove('hidden');
    cursor.classList.add('blinking');
    introText.classList.remove('opacity-0', 'translate-y-5');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  cursor.classList.remove('hidden');
  setTimeout(typeText, 500);
});

//fade in scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.remove('opacity-0');
      el.classList.add('opacity-100');

      if (el.classList.contains('fade-up')) {
        el.classList.remove('translate-y-10');
        el.classList.add('translate-y-0');
      } else if (el.classList.contains('fade-down')) {
        el.classList.remove('-translate-y-10');
        el.classList.add('translate-y-0');
      } else if (el.classList.contains('fade-left')) {
        el.classList.remove('-translate-x-10');
        el.classList.add('translate-x-0');
      } else if (el.classList.contains('fade-right')) {
        el.classList.remove('translate-x-10');
        el.classList.add('translate-x-0');
      }
    }
  });
}, {
  threshold: 0.3
});

//animasi munculnya setiap section
["fade-up", "fade-down", "fade-left", "fade-right"].forEach(cls => {
  document.querySelectorAll(`.${cls}`).forEach(el => {
    el.classList.add('opacity-0', 'transition-all', 'duration-700');
    if (cls === 'fade-up') el.classList.add('translate-y-10');
    if (cls === 'fade-down') el.classList.add('-translate-y-10');
    if (cls === 'fade-left') el.classList.add('-translate-x-10');
    if (cls === 'fade-right') el.classList.add('translate-x-10');
    fadeObserver.observe(el);
  });
});

//about//
const bars = document.querySelectorAll('.observe-bar');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.remove('bar-animate'); // restart animation
      void el.offsetWidth; // trigger reflow
      el.classList.remove('bar-reset');
      el.classList.add('bar-animate');
    } else {
      el.classList.remove('bar-animate');
      el.classList.add('bar-reset');
    }
  });
}, {
  threshold: 0.5
});

bars.forEach(bar => {
  barObserver.observe(bar);
});

//contact section
const form = document.getElementById('contactForm');
const popup = document.getElementById('popupModal');
const closeBtn = document.getElementById('closePopup');
const tingSound = document.getElementById('tingSound');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  popup.classList.remove('hidden');
  form.reset();
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

//Notification pop up
function showNotification(message) {
  const notif = document.getElementById('notif');
  notif.textContent = message;
  notif.classList.remove('opacity-0');
  notif.classList.add('opacity-100');
  setTimeout(() => {
    notif.classList.add('opacity-0');
    notif.classList.remove('opacity-100');
  }, 2000);
}
