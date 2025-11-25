let nombre = prompt("ingresa tu nombre");

const saludar = () => {
    console.log("hola " + nombre);
}
saludar();

let btn = document.getElementById("boton-Saludar");
btn.addEventListener("click", saludar);