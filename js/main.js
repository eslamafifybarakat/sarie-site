document.addEventListener("DOMContentLoaded", function () {
  // ====================SCROLL==============
  const navbar = document.getElementById('navbar');
  const userLoggedIn = window.localStorage.getItem('isLogin') === 'true';

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  // ===============AUTH=====================
  function showElement(elementId) {
    document.getElementById(elementId) ? document.getElementById(elementId).classList.remove('d-none') : '';
  }
  function hideElement(elementId) {
    document.getElementById(elementId) ? document.getElementById(elementId).classList.add('d-none') : '';
  }
  function setLoadingOverlay() {
    showElement('loading-overlay');
    setTimeout(() => {
      showElement('success');
      hideElement('proceed');
      hideElement('loader');
    }, 2500);
  }

  function loginUser() {
    setLoadingOverlay();
    window.localStorage.setItem('isLogin', true);
    setTimeout(() => {
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
// ==================
let currentStep = 0;

function changeStep(step) {
  // Hide current step content
  document.getElementById(`step${currentStep + 1}`).style.display = 'none';

  // Update current step
  currentStep = step;

  // Show new step content
  document.getElementById(`step${currentStep + 1}`).style.display = 'block';

  // Update progress bar
  const progressPercentage = (currentStep + 1) * (100 / 8); // Assuming 8 steps
  setProgress(progressPercentage);
  // Update step styles
  updateStepStyles();
}
function setProgress(progressPercentage) {
  const progressBar = document.getElementById('progressBar');
  const stepNumber = document.getElementById('stepNumber');

  // Update progress bar width and content
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.innerText = `${Math.round(progressPercentage)}%`;

  // Update step number
  stepNumber.innerText = currentStep + 1;
}
function updateStepStyles() {
  const steps = document.querySelectorAll('.step');
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

changeStep(0);

// ====================SUBMIT=================
function updateFileName() {
  var inputFile = document.getElementById("taxIdCertificate");
  var fileNameSpan = document.getElementById("pdfCertificationFileName");
  fileNameSpan.textContent = inputFile.files[0].name;
}
function updateVideo() {
  var inputFile = document.getElementById("video");
  var fileNameSpan = document.getElementById("videoFileName");
  fileNameSpan.textContent = inputFile.files[0].name;
}

document.getElementById("requestDataForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form element by its id
  var form = event.target;

  // Loop through all form elements
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];

    // Check if the element has a value (ignore buttons and other non-input elements)
    if (element.type !== "button" && element.type !== "submit" && element.value !== undefined) {
      console.log(element.name + ": " + element.value);
    }
  }
});