/**
 * progress.js
 * Dibuja la barra delgada de arriba que avanza mientras se hace scroll.
 * Se activa con: <i data-progress-bar>
 */
(function () {
  "use strict";

  var bar = document.querySelector("[data-progress-bar]");
  if (!bar) return;

  var waiting = false;

  function update() {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
    bar.style.transform = "scaleX(" + ratio + ")";
    waiting = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (waiting) return;
      waiting = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
})();
