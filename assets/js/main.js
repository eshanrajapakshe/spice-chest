(function ($) {
  //Navigation
  var app = (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();
})(jQuery);

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".cd-header").addClass("nav-black");
  } else {
    $(".cd-header").removeClass("nav-black");
  }
});

$(document).ready(function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  };
});