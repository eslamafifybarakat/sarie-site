
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
  // ==============
  if (window.localStorage.getItem('isLogin')) {
    document.getElementById('user-info').classList.remove('d-none');
    document.getElementById('login-btn').classList.add('d-none');
  }
  // ==================
  document.getElementById('logout').addEventListener('click', function () {
    window.localStorage.removeItem('isLogin');
  });
  // ===============LOGIN====================
  document.getElementById('login').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
      window.localStorage.setItem('isLogin', true);
    }, 2500);
    setTimeout(function () {
      document.getElementById('loading-overlay').classList.add('d-none');
      if (window.location.href.includes('ar')) {
        window.location.href = 'index-ar.html';
      } else {
        window.location.href = 'index.html';
      }
    }, 4000);
  });
  // ======================
  document.getElementById('register').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
  });
  // ============================
  document.getElementById('forget-password').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
    setTimeout(function () {
      document.getElementById('loading-overlay').classList.add('d-none');
      if (window.location.href.includes('ar')) {
        window.location.href = 'reset-password-ar.html';
      } else {
        window.location.href = 'reset-password.html';
      }
    }, 4000);
  });
  // ==========================
  document.getElementById('reset-password').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
  });

});