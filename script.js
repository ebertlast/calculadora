var resultado = "0";
var temp = 0;
var operacion = "";

function alertaPrueba() {
  alert("Hola Mundo");
}

function add(texto) {
  texto = +texto;
  if (resultado == 0) {
    resultado = '';
  }
  resultado += `${texto}`;
  pintaResultado();
}

function pintaResultado() {
  document.getElementById("resultado").value = resultado;
}

function limpiar() {
  resultado = 0;
  temp = 0;
  pintaResultado();
}

function setOperacion(op) {
  operacion = op;
  temp = resultado;
  resultado = 0;
  pintaResultado();
}

function calcular() {
  switch (operacion) {
    case "+":
      resultado = parseFloat(temp) + parseFloat(resultado);
      break;
    case "-":
      resultado = parseFloat(temp) - parseFloat(resultado);
      break;
  }
  pintaResultado();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btn4").addEventListener("click", () => { add(4); })
  document.getElementById("btn5").addEventListener("click", () => { add(5); })
  document.getElementById("btn6").addEventListener("click", () => { add(6); })

  // document.getElementById("btn1").addEventListener("mouseover", () => { alert('') })

  for (let i = 0; i < 4; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => { add(i); })
  }

  document.getElementById("btnClear").addEventListener("click", () => { limpiar(); })


  console.log(document.getElementById("btn5"))
});

