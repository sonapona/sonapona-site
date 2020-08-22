"use strict";

HTMLElement.prototype.scrollTo = function (y) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  this.scrollTop = y;
  this.scrollLeft = x;
};

document.querySelector(".nlp-scrim").addEventListener("scroll", function (e) {
  var targ = e.target;

  if (targ.scrollTop == 0) {
    CloseDrawer();
  }
});
var flippedClass = "nlp-flipcard--flipped";
var cards = document.querySelectorAll(".nlp-flipcard");
cards.forEach(function (element) {
  element.addEventListener("click", function (e) {
    if (element.classList.contains(flippedClass)) {
      element.classList.remove(flippedClass);
    } else {
      element.classList.add(flippedClass);
    }
  });
});

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function OpenDrawer() {
  var drawer = document.querySelector(".nlp-paned__left");
  var scrim = document.querySelector(".nlp-scrim");
  scrim.appendChild(drawer);
  scrim.classList.add("nlp-scrim--open");
  setTimeout(function () {
    drawer.classList.add("nlp-paned__left--reparented");
    drawer.classList.add("nlp-paned__left--open");
  }, 150);
  var padding = document.querySelector(".nlp-scrim__padder");
  scrim.scrollTo(padding.scrollHeight / 2, 0);
}

function CloseDrawer() {
  var drawer = document.querySelector(".nlp-paned__left");
  drawer.classList.remove("nlp-paned__left--open");
  drawer.classList.remove("nlp-paned__left--reparented");
  var scrim = document.querySelector(".nlp-scrim");
  scrim.classList.remove("nlp-scrim--open");
  document.querySelector(".nlp-paned").prepend(drawer);
}

