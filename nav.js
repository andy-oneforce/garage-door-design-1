// Mobile menu toggle. Without JS the nav is always visible (see styles.css).
(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (!btn || !nav) return;
  document.documentElement.classList.add("js");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    }
  });
})();
