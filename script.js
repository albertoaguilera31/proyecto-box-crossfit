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

//FUNCION PARA CAMBIAR AUTOMATICAMENTE LAS IMAGENES DEL CARRUSEL

const carousel = document.getElementById('carouselExampleCaptions');
const interval = 3000; // Intervalo de tiempo en milisegundos (3 segundos)

// Función para cambiar de diapositiva automáticamente
function cambiarDiapositiva() {
  const slides = carousel.querySelectorAll('.carousel-item');
  const activeSlide = carousel.querySelector('.carousel-item.active');
  const activeIndex = Array.from(slides).indexOf(activeSlide);

  const nextIndex = (activeIndex + 1) % slides.length;

  carousel.querySelector('.carousel-indicators').children[activeIndex].classList.remove('active');
  carousel.querySelector('.carousel-indicators').children[nextIndex].classList.add('active');

  slides[activeIndex].classList.remove('active');
  slides[nextIndex].classList.add('active');
}

//CODIGO PARA CARGAR INFORMACIÓN DEL ARCHIVO JSON AL CORRUSEL USANDO FETCH

document.addEventListener('DOMContentLoaded', () => {
  // Obtén una referencia al elemento del carrusel
  const carousel = document.querySelector('.carousel-inner');

  // Carga el archivo JSON
  fetch('index.json')
    .then(response => response.json())
    .then(data => {
      // Itera sobre los objetos del JSON
      data.forEach((objeto, index) => {
        // Crea un nuevo elemento de carrusel para cada objeto
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        // Si es el primer objeto, añade la clase 'active' para que se muestre primero
        if (index === 0) {
          carouselItem.classList.add('active');
        }

        // Crea el contenido del carrusel con los datos del objeto
        carouselItem.innerHTML = `
          <img src="./imagenes/carrusel/imagen${index + 1}.jpg" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5 id="nombretestimonio">${objeto.nombre}</h5>
            <p>Edad: <span id="edadtestimonio">${objeto.edad}</span></p>
            <p id="comentariostestimonio">${objeto.comentarios}</p>
          </div>
        `;

        // Agrega el elemento del carrusel al carrusel principal
        carousel.appendChild(carouselItem);
      });
    })
    .catch(error => console.error(error));
});


//SCROLL DE LA PAGINA

window.onscroll = function() {
  // Código a ejecutar cuando se activa el scroll
  const iconovolver = document.querySelector('.floating-link');
  iconovolver.style.display = 'block';
};

  //FORMULARIO

  //OBTENER REFERENCIA AL FORMULARIO CON USO DEL DOM, ARRAYS Y BUCLE FOR

const formulario = document.getElementById('formularioSuscripcion');
const opcionesSelect = document.getElementById('opciones');
const opciones = ['Legionario', 'Espartano', 'Tercio', 'Navy Seal'];

// Generar las opciones de suscripción dinámicamente con bucle for
for (let i = 0; i < opciones.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = opciones[i];
  opcion.textContent = opciones[i];
  opcionesSelect.appendChild(opcion);
}

// EVENTOS ASOCIADOS AL FORMULARIO CON USO DE OBJETOS, CLASES y ESTRUCTURA DE CONTROL IF

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

  // Obtener los valores ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = parseInt(document.getElementById('edad').value);
  const opcionCliente = opcionesSelect.value;

  //MENSAJE DE ERROR EN CASO DE SER MENOR DE EDAD

  const contenedorMensaje = document.getElementById('contenedor-mensaje');

  if (edad < 18) {
  const mensajeElemento = document.createElement('p');
  mensajeElemento.textContent = 'Debes ser mayor de 18 años para acceder.';
  mensajeElemento.style.color = 'red';
  contenedorMensaje.innerHTML = '';
  contenedorMensaje.appendChild(mensajeElemento);
  }else{
  const mensajeElemento = document.createElement('p');
  mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
  mensajeElemento.style.color = '#53D106';

  contenedorMensaje.innerHTML = '';

  contenedorMensaje.appendChild(mensajeElemento);
  const cliente = new Cliente(nombre, apellido, edad, opcionCliente);

  //USO DE JSON Y DE LOCALSTORAGE PARA MANEJAR LOS DATOS OBTENIDOS DEL FORMULARIO

  const formularioJson = JSON.stringify(cliente);
  localStorage.setItem('formularioData', formularioJson);
 
    //RECUPERAR DATOS DEL LOCALSTORAGE CON BOTON DE HTML

  function botonData(){
    const recuperarData = localStorage.getItem('formularioData');
    const mostrarDataJson = JSON.parse(recuperarData);

    // GENERAR CODIGO DE SUSCRIPCIÓN INDIVIDUAL E INDIVIDUAL PARA EL CLIENTE
  
    let codigoSuscripcion = localStorage.getItem('codigoSuscripcion');
    if (!codigoSuscripcion) {
    codigoSuscripcion = generarCodigoAleatorio();
    localStorage.setItem('codigoSuscripcion', codigoSuscripcion);
    }
    
    // Referenciar el contenedor de datos en HTML
    const contenedorDatos = document.getElementById('contenedor-datos');
    contenedorDatos.innerHTML = `
    Nombre: ${mostrarDataJson.nombre} <br>
    Apellido: ${mostrarDataJson.apellido} <br>
    Edad: ${mostrarDataJson.edad} <br>
    Suscripción selecionada: ${mostrarDataJson.opcionCliente} <br>
    <p>Código de Suscripción: <span id="codigoSuscripcion">${codigoSuscripcion}</span></p>
    `;
    }

    // Función para generar código aleatorio
    function generarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    const longitud = 8; // Longitud del código
  
    for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
    }
  
    return codigo;
    }

    generarCodigoAleatorio();

    //FUNCIÓN PARA BORRAR EL LOCALSTORAGE USANDO BOTON DE HTML
    function borrarLocalStorage() {
      localStorage.clear();

       //Funcionalidad para eliminar datos presentados en pantalla cuando el usuario pulsa el boton de eliminar suscripción 
      const contenedorDatos = document.getElementById('contenedor-datos');
      contenedorDatos.innerHTML = '';
      mensajeElemento.textContent = '¡Bienvenido al Warriors Box, futuro guerrero!';
      mensajeElemento.style.color = '#53D106';
      mensajeElemento.textContent = '';
      const mensajeEliminacion = document.getElementById('contenedor-eliminar-datos');
      mensajeEliminacion.textContent = 'Se han eliminado todos los datos de tu suscripción';
      mensajeEliminacion.style.color = 'red';
    }
    
    const botonLimpiar = document.getElementById('borrarDataCliente');
    borrarDataCliente.style.display = "block";
    botonLimpiar.addEventListener('click', borrarLocalStorage);
  
    const botonVerData= document.getElementById('botonRecuperacionData');
    botonVerData.style.display = "block";
    botonVerData.onclick= botonData;
    
  }

  formulario.reset(); // Reiniciar el formulario
});
