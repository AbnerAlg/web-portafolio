/**
 * reveal.js
 * Hace que los bloques suban suavemente al entrar en pantalla.
 * Se activa con: class="reveal" en cualquier elemento.
 */
(function () {
  "use strict";

  var items = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function showAll() {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (!("IntersectionObserver" in window) || reduceMotion) {
    showAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
