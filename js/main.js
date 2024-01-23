document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // ===============LOGIN====================
  document.getElementById('login').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
    setTimeout(function () {
      document.getElementById('loading-overlay').classList.add('d-none');
      window.location.href = 'index.html';
    }, 4000);
  });
});

// ======================
document.getElementById('register').addEventListener('click', function () {
  document.getElementById('loading-overlay').classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('success').classList.remove('d-none');
    document.getElementById('proceed').classList.add('d-none');
  }, 2500);
  setTimeout(function () {
    // document.getElementById('loading-overlay').classList.add('d-none');
  }, 4000);
});
