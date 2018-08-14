function agregarTarjeta() {
  const tareaNueva = document.getElementById('tareaNueva');
  tareaNueva.innerHTML += `
  <input class="btn btn-secondary botones type="button" value="tarea 1" onclick="inspeccionarTarea()">`;
};
function agregarLista() {
  // div que esta en html
  const bton = document.getElementById('boton');
  bton.style.display = 'none';
  const listaNueva = document.getElementById('listaNueva');
  const lista = document.createElement('div');
  const tituloTarjeta = document.createElement('input');
  const divParaTarjeta = document.createElement('div');
  const btn = document.createElement('button');
  const textoBtn = document.createTextNode('+ Agregar lista');

  divParaTarjeta.setAttribute('id', 'tareaNueva');
  lista.setAttribute('id', 'lista');
  btn.onclick = function() {agregarTarjeta()};
 
  listaNueva.appendChild(lista);
  lista.appendChild(tituloTarjeta);
  lista.appendChild(divParaTarjeta);
  lista.appendChild(btn);
  btn.appendChild(textoBtn);
};

function inspeccionarTarea() {
  
}
