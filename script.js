document.addEventListener('DOMContentLoaded', function () {
  var elementoAnio = document.getElementById('anio-actual');
  if (elementoAnio) {
    var anioActual = new Date().getFullYear();
    elementoAnio.textContent = anioActual;
  }
});