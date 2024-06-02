function typeWriter(index, string, className) {
  if (index < string.length) {
    document.querySelector(className).innerHTML += string[index];
    setTimeout(() => {
      typeWriter(index + 1, string, className);
    }, 150);
  }
}

function createObserver(className, text) {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeWriter(0, text, className);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
}

// Observe the paragraph elements
const elementsToObserve = [
  { className: '.name', text: 'Pratiyank' },
  { className: '.js-work', text: 'What I Do?' },
  { className: '.js-proficiency', text: 'Proficiency' },
  { className: '.js-contact', text: 'Contact me!' }
];

elementsToObserve.forEach(item => {
  const element = document.querySelector(item.className);
  if (element) {
    const observer = createObserver(item.className, item.text);
    observer.observe(element);
  }
});

// Burger menu functionality
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Smooth scroll function
function scrollOnClick(className) {
  document.querySelector(className).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('scroll', () => {
  let headerElement = document.querySelector('.js-header');
  let upButtonElement = document.querySelector('.js-up-button')

  let headerRect = headerElement.getBoundingClientRect();
  let headerInView = headerRect.bottom>0;

  if (headerInView) {
    upButtonElement.style.display = 'none';
  } else {
    upButtonElement.style.display = 'flex';
  }
});
