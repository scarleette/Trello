function agregarTarea() {
  const tareaNueva = document.getElementById('tareaNueva');
  tareaNueva.innerHTML += '<input type="button" value="tarea 1" onclick="inspeccionarTarea()">';
};
function agregarTarjeta() {
  const tarjetaNueva = document.getElementById('tarjetaNueva');
  tarjetaNueva.innerHTML = '<div class="container"><div class="row"><div class="card" style="width: 16rem;"><input type="text" placeholder ="nombre de la tarjeta"><div id = "tareaNueva"></div><input type="button" value="Agregar Tarea" onclick="agregarTarea()"></div></div></div>';
};

function inspeccionarTarea() {
  
}

