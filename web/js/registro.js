function validarCorreo(){
    var correo = document.getElementById("correo").value;
    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(expresionRegular.test(correo)){
        return true;
    } else{
        alert("Por favor, ingresa un correo valido");
        return false;
    }
}
function validarDni(){

}
/**
 * Con esta funcion hacemos que desaparezca la barra navegadora
 */
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


