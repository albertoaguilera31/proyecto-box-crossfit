
//FORMULARIO DE SUSCRIPCIÓN AL WARRIORS BOX

//Uso del DOM para seleccionar los elementos del formulario en el documento html

const formulario = document.getElementById('formularioSuscripcion');
const opcionesSelect = document.getElementById('opciones');
const opciones = ['Legionario: 25USD', 'Espartano: 45USD', 'Tercio: 60USD', 'Navy Seal: 100USD'];
const botonVerData = document.getElementById('botonVerData');

// Código para generar las opciones de suscripción dinámicamente con bucle for

for (let i = 0; i < opciones.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = opciones[i];
  opcion.textContent = opciones[i];
  opcionesSelect.appendChild(opcion);
}

//Código para crear un objeto con la clase cliente usando los datos introduccidos por el usuario en el formulario 

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

  //codigo para mostrar mensaje de suscripción rechazada del usuario menor de 18 años con sweetalert2

  if (edad < 18) {
    Swal.fire({
      title: 'Suscripción rechazada',
      text: 'Debes ser mayor de 18 años para suscribirte.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } else {

    //codigo para mostrar mensaje de suscripción exitosa del usuario con sweetalert2 y almacenar datos de suscripción del usuario en el localStorage

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

//Función para generar codigo de suscripción aleatorio para el usuario luego de la suscrición exitosa

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

//Formulario de pago para la selección del tipo de pago generado dinámicamente con bucle for

const tipoPagoSelect = document.getElementById('tipoPago');
const opciones2 = ['Tarjeta de crédito', 'Tarjeta de débito'];

for (let i = 0; i < opciones2.length; i++) {
const opcion = document.createElement('option');
opcion.value = opciones2[i];
opcion.textContent = opciones2[i];
tipoPagoSelect.appendChild(opcion);
}

//Función para recuperar data del localstorage y luego mostrarla en pantalla usando sweetalert2

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

//Codigo para añadir el evento onscroll para activar el boton de volver al menú principal

window.onscroll = function() {
  // Código a ejecutar cuando se activa el scroll
  const iconovolver = document.querySelector('.floating-link');
  iconovolver.style.display = 'block';
};





