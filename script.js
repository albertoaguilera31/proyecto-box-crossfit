// Definir la clase Suscripcion
class Suscripcion {
    constructor(nombre, correo, tipo) {
      this.nombre = nombre;
      this.correo = correo;
      this.tipo = tipo;
    }
  }

  // Obtener referencias a los elementos del formulario y los detalles de la suscripción
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const nameElement = document.getElementById('name');
  const emailElement = document.getElementById('email');
  const subscriptionTypeElement = document.getElementById('subscription-type');

  // Manejador de eventos para el botón de suscripción
  subscribeBtn.addEventListener('click', function() {
    // Obtener los valores del formulario
    const nombre = nameInput.value;
    const correo = emailInput.value;
    const tipoSuscripcion = 'CrossFit'; // Tipo de suscripción fijo para este ejemplo

    // Crear una nueva instancia de Suscripcion
    const suscripcion = new Suscripcion(nombre, correo, tipoSuscripcion);

    // Actualizar los detalles de la suscripción en el DOM
    nameElement.textContent = `Nombre: ${suscripcion.nombre}`;
    emailElement.textContent = `Correo electrónico: ${suscripcion.correo}`;
    subscriptionTypeElement.textContent = `Tipo de suscripción: ${suscripcion.tipo}`;
  });