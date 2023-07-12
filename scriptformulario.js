
//FORMULARIO DE SUSCRIPCIÓN

  const formulario = document.getElementById('formularioSuscripcion');
const opcionesSelect = document.getElementById('opciones');
const opciones = ['Legionario', 'Espartano', 'Tercio', 'Navy Seal'];
const botonVerData = document.getElementById('botonVerData');

// Generar las opciones de suscripción dinámicamente con bucle for
for (let i = 0; i < opciones.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = opciones[i];
  opcion.textContent = opciones[i];
  opcionesSelect.appendChild(opcion);
}

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  class Cliente {
    constructor(nombre, apellido, edad, opcionCliente) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.opcionCliente = opcionCliente;
    }
  }

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = parseInt(document.getElementById('edad').value);
  const opcionCliente = opcionesSelect.value;

  const contenedorMensaje = document.getElementById('contenedor-mensaje');

  if (edad < 18) {
    Swal.fire({
      title: 'Suscripción rechazada',
      text: 'Debes ser mayor de 18 años para suscribirte.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else {
    const mensajeElemento = document.createElement('p');
    mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
    mensajeElemento.style.color = '#53D106';

    contenedorMensaje.innerHTML = '';

    contenedorMensaje.appendChild(mensajeElemento);
    const cliente = new Cliente(nombre, apellido, edad, opcionCliente);

    const formularioJson = JSON.stringify(cliente);
    localStorage.setItem('formularioData', formularioJson);

    Swal.fire({
      title: '¡Suscripción exitosa!',
      text: 'Gracias por suscribirte al Warriors Box.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      botonVerData.style.display = 'block';
    });
  }

  formulario.reset();
});

function generarCodigoAleatorio() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  const longitud = 8;

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }

  return codigo;
}

function mostrarDatosSuscripcion() {
  const recuperarData = localStorage.getItem('formularioData');
  const mostrarDataJson = JSON.parse(recuperarData);

  let codigoSuscripcion = localStorage.getItem('codigoSuscripcion');
  if (!codigoSuscripcion) {
    codigoSuscripcion = generarCodigoAleatorio();
    localStorage.setItem('codigoSuscripcion', codigoSuscripcion);
  }

  Swal.fire({
    title: 'Datos de Suscripción',
    html: `
      <strong>Nombre:</strong> ${mostrarDataJson.nombre}<br>
      <strong>Apellido:</strong> ${mostrarDataJson.apellido}<br>
      <strong>Edad:</strong> ${mostrarDataJson.edad}<br>
      <strong>Suscripción seleccionada:</strong> ${mostrarDataJson.opcionCliente}<br>
      <strong>Código de Suscripción:</strong> ${codigoSuscripcion}<br>
      <strong>Nota:</strong> Utiliza el codigo de suscripción para iniciar tus entrenamientos presenciales<br>
      en la sede de tu preferencia.
    `,
    icon: 'info',
    confirmButtonText: 'Aceptar'
  });
}




