document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}
