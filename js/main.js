
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
  // ==============TOGGLE USER INFO AND LOGIN BUTTON=================
  if (window.localStorage.getItem('isLogin')) {
    document.getElementById('user-info').classList.remove('d-none');
    document.getElementById('login-btn').classList.add('d-none');
  }
  // ==================LOGOUT ACTION ==========================
  document.getElementById('logout').addEventListener('click', function () {
    window.localStorage.removeItem('isLogin');
  });
  // ===============LOGIN ACTION====================
  document.getElementById('login').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
    setTimeout(function () {
      window.localStorage.setItem('isLogin', true);
      document.getElementById('loading-overlay').classList.add('d-none');
      if (window.location.href.includes('ar')) {
        window.location.href = 'index-ar.html';
      } else {
        window.location.href = 'index.html';
      }
    }, 4000);
  });
  // ===============REGISTER ACTION====================
  document.getElementById('register').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
  });
  // ===============FORGET PASSWORD ACTION====================
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
  // ===============RESET PASSWORD ACTION====================
  document.getElementById('reset-password').addEventListener('click', function () {
    document.getElementById('loading-overlay').classList.remove('d-none');
    setTimeout(() => {
      document.getElementById('success').classList.remove('d-none');
      document.getElementById('proceed').classList.add('d-none');
    }, 2500);
  });

});