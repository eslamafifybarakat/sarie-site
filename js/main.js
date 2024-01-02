var search = document.querySelector("#search");
var searchInput = document.querySelector("#search-input");
var navContent=document.querySelector('#nav-content');
var closeSearch=document.querySelector('#close-search');

search?.addEventListener("click", () => {
  navContent.classList.add("d-none");
  searchInput.classList.remove("d-none");
});
closeSearch?.addEventListener("click", () => {
  navContent.classList.remove("d-none");
  searchInput.classList.add("d-none");
});




$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  $('.sidebar .nav-link').on('click', function () {
      $('#sidebar').removeClass('active');
  });

  $(window).scroll(function () {
          $('#sidebar').removeClass('active');
    if ($(window).scrollTop() >= 330) {
      $(".buttonUp").fadeIn(400);
    } else {
      $(".buttonUp").fadeOut(400);
    }
  });

  $(".buttonUp").click(function () {
    $("html , body").animate({ scrollTop: "0" }, 2000);
  });
});
// function switchLanguage(lang) {
//   var head = document.head;
//   var existingLink = document.getElementById("language-link");
//   var existingArLink = document.getElementById("language-ar-link");
//   var existingArStyle = document.getElementById("language-ar-style");
//   if (lang === "ar") {
//     document.documentElement.setAttribute("dir", "rtl");
//     document.documentElement.lang = "ar";
//     var arabicLink = document.createElement("link");
//     var arabicStyle = document.createElement("link");
//     var arabicStyle2 = document.createElement("link");
//     arabicLink.href = "../vendor/bootstrap/css/bootstrap.rtl.css";
//     arabicLink.rel = "stylesheet";
//     arabicLink.id = "language-link";
//     arabicStyle.href = "css/style-rtl.css";
//     arabicStyle.id = "language-ar-link";
//     arabicStyle.rel = "stylesheet";
//     arabicStyle2.href = "../css/style-rtl.css";
//     arabicStyle2.id = "language-ar-style";
//     arabicStyle2.rel = "stylesheet";

//     head.appendChild(arabicLink);
//     head.appendChild(arabicStyle);
//     head.appendChild(arabicStyle2);
//     if (existingLink) {
//       document.documentElement.setAttribute("dir", "ltr");
//       document.documentElement.lang = "en";
//       head.removeChild(existingLink);
//       head.removeChild(existingArLink);
//       head.removeChild(existingArStyle);
//     }
//   } else if (lang === "en") {
//     document.documentElement.setAttribute("dir", "ltr");
//     document.documentElement.lang = "en";
//     head.removeChild(existingLink);
//     head.removeChild(existingArLink);
//     head.removeChild(existingArStyle);
//   }
// }
