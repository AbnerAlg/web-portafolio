/**
 * copy-email.js
 * Copia el correo al portapapeles. Si el navegador lo bloquea, deja el texto seleccionado.
 * Se activa con: <button data-copy="#id-del-texto">
 */
(function () {
  "use strict";

  var button = document.querySelector("[data-copy]");
  if (!button) return;

  var target = document.querySelector(button.getAttribute("data-copy"));
  if (!target) return;

  var originalLabel = button.textContent;

  function flash(message) {
    button.textContent = message;
    setTimeout(function () {
      button.textContent = originalLabel;
    }, 1800);
  }

  function selectText() {
    var range = document.createRange();
    range.selectNodeContents(target);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    flash("Selecciónalo y copia");
  }

  button.addEventListener("click", function () {
    try {
      navigator.clipboard.writeText(target.textContent.trim()).then(function () {
        flash("Copiado");
      }, selectText);
    } catch (error) {
      selectText();
    }
  });
})();
