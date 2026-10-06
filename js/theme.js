/**
 * theme.js
 * Cambia entre tema claro y oscuro y recuerda la elección del visitante.
 * Se activa con: <button data-theme-toggle>
 */
(function () {
  "use strict";

  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");

  function readSaved() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "dark" || value === "light" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Si el navegador bloquea el almacenamiento, el tema solo dura esta visita. */
    }
  }

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var saved = readSaved();
  if (saved) root.setAttribute("data-theme", saved);

  if (button) {
    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      save(next);
    });
  }
})();
