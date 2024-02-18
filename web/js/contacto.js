var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hidden"); // Muestra la barra de navegación al hacer scroll hacia arriba
  } else {
    document.getElementById("navbar").classList.add("hidden"); // Oculta la barra de navegación al hacer scroll hacia abajo
  }
  prevScrollpos = currentScrollPos;
}