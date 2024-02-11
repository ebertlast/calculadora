var resultado = "0";

function alertaPrueba() {
  alert("Hola Mundo");
}

function add(texto) {
  console.log(typeof resultado)
  if (resultado == 0) {
    resultado = '';
  }
  resultado += `${texto}`;
  pintaResultado();
}

function pintaResultado() {
  document.getElementById("resultado").value = resultado;
}

document.addEventListener('DOMContentLoaded', function () {

});

