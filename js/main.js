document.addEventListener("DOMContentLoaded", function () {
  // ====================SCROLL==============
  const navbar = document.getElementById('navbar');
  const userLoggedIn = window.localStorage.getItem('isLogin') === 'true';

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  // ===============AUTH=====================
  function showElement(elementId) {
    document.getElementById(elementId).classList.remove('d-none');
  }
  function hideElement(elementId) {
    document.getElementById(elementId).classList.add('d-none');
  }
  function setLoadingOverlay() {
    showElement('loading-overlay');
    setTimeout(() => {
      showElement('success');
      hideElement('proceed');
    }, 2500);
  }

  function loginUser() {
    setLoadingOverlay();
    setTimeout(() => {
      window.localStorage.setItem('isLogin', true);
      hideElement('loading-overlay');
    }, 4000);
  }

  function registerUser() {
    setLoadingOverlay();
  }

  function forgetPassword() {
    setLoadingOverlay();
    setTimeout(() => {
      hideElement('loading-overlay');
    }, 4000);
  }

  window.addEventListener('scroll', handleScroll);
  // ======================LOGIN ===================
  if (userLoggedIn) {
    showElement('user-info');
    hideElement('login-btn');
  }
  // ==============LOGOUT==================
  document.getElementById('logout').addEventListener('click', function () {
    window.localStorage.removeItem('isLogin');
  });
  // ===================AUTH ACTIONS=============
  document.getElementById('login') ? document.getElementById('login').addEventListener('click', loginUser) : '';

  document.getElementById('register') ? document.getElementById('register').addEventListener('click', registerUser) : '';

  document.getElementById('forget-password') ? document.getElementById('forget-password').addEventListener('click', forgetPassword) : '';

  document.getElementById('reset-password') ? document.getElementById('reset-password').addEventListener('click', function () {
    setLoadingOverlay();
  }) : '';

});
