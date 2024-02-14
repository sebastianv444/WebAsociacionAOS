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