
function typeWriter(index, string, className) {
  if (index < string.length) {
    document.querySelector(className).innerHTML+=string[index];
    setTimeout(() => {
      typeWriter(index + 1, string, className);
    }, 150);
  }
}

// Create an Intersection Observer instance
const observer1 = new IntersectionObserver((entries, observer1) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the typewriter effect when the paragraph is visible
      typeWriter(0, 'Pratiyank', '.name');
      // Unobserve the paragraph after starting the typewriter effect
      observer1.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the typewriter effect when the paragraph is visible
      typeWriter(0,'What I Do?','.js-work')
      // Unobserve the paragraph after starting the typewriter effect
      observer2.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

const observer3 = new IntersectionObserver((entries, observer3) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the typewriter effect when the paragraph is visible
      typeWriter(0,'Proficiency','.js-proficiency')
      // Unobserve the paragraph after starting the typewriter effect
      observer3.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

const observer4 = new IntersectionObserver((entries, observer4) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the typewriter effect when the paragraph is visible
      typeWriter(0,'Contact me!','.js-contact')
      // Unobserve the paragraph after starting the typewriter effect
      observer4.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed


// Observe the paragraph element
const para = document.querySelector('.name');
const para2 = document.querySelector('.js-work');
const para3 = document.querySelector('.js-proficiency')
const para4 = document.querySelector('.js-contact')
observer1.observe(para);
observer2.observe(para2);
observer3.observe(para3);
observer4.observe(para4);

// Burger menu functionality
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

// Smooth scroll function
function scrollOnClick(className) {
  document.querySelector(className).scrollIntoView({ behavior: 'smooth' });
}
