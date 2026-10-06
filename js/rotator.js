/**
 * rotator.js
 * Cambia la palabra destacada de la portada cada par de segundos.
 * Se activa con: <span data-rotator> que contiene varios .rotator__word
 */
(function () {
  "use strict";

  var INTERVAL_MS = 2200;
  var container = document.querySelector("[data-rotator]");
  if (!container) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var words = container.querySelectorAll(".rotator__word");
  if (words.length < 2 || reduceMotion) return;

  var index = 0;

  setInterval(function () {
    words[index].classList.remove("is-active");
    index = (index + 1) % words.length;
    words[index].classList.add("is-active");
  }, INTERVAL_MS);
})();
