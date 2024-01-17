const navbar = document.getElementById('navbar');

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);