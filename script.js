//Uso del DOM para estilo de las cards de suscricripcion

//card legionario
var legionario = document.getElementById("card-legionario");

// Agregar el evento mouseover a la tarjeta
legionario.addEventListener("mouseover", function() {
  legionario.style.boxShadow = "0px 0px 10px rgb(161, 5, 200)";
});

// Agregar el evento mouseout a la tarjeta
legionario.addEventListener("mouseout", function() {
  legionario.style.boxShadow = "none";
});

//card espartano
var espartano = document.getElementById("card-espartano");

// Agregar el evento mouseover a la tarjeta
espartano.addEventListener("mouseover", function() {
  espartano.style.boxShadow = "0px 0px 10px rgb(212, 34, 34)";
});

// Agregar el evento mouseout a la tarjeta
espartano.addEventListener("mouseout", function() {
  espartano.style.boxShadow = "none";
});

//card tercio
var tercio = document.getElementById("card-tercio");

// Agregar el evento mouseover a la tarjeta
tercio.addEventListener("mouseover", function() {
  tercio.style.boxShadow = "0px 0px 10px rgb(246, 158, 6)";
});

// Agregar el evento mouseout a la tarjeta
tercio.addEventListener("mouseout", function() {
  tercio.style.boxShadow = "none";
});

//card navy seal
var navy = document.getElementById("card-navy");

// Agregar el evento mouseover a la tarjeta
navy.addEventListener("mouseover", function() {
  navy.style.boxShadow = "0px 0px 10px rgb(6, 66, 246)";
});

// Agregar el evento mouseout a la tarjeta
navy.addEventListener("mouseout", function() {
  navy.style.boxShadow = "none";
});




























/*// Definir la clase Suscripcion
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
  });*/