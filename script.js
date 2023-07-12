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


//funcionalidad de diapositivas del carrusel

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-inner');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentItem = 0;
  const intervalTime = 3000; // Intervalo de 3 segundos (ajusta según tus necesidades)

  function nextSlide() {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % totalItems;
    carouselItems[currentItem].classList.add('active');
  }

  setInterval(nextSlide, intervalTime);
});


