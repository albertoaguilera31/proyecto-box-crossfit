//Uso del DOM para estilo de las cards de suscricripcion

//tarjeta legionario
let legionario = document.getElementById("card-legionario");
let btn1 = document.getElementById("btn-suscripcion1");

// Agregar el evento mouseover a la tarjeta
legionario.addEventListener("mouseover", function() {
  legionario.style.boxShadow = "0px 0px 10px rgb(161, 5, 200)";
});

// Agregar el evento mouseout a la tarjeta
legionario.addEventListener("mouseout", function() {
  legionario.style.boxShadow = "none";
});

//Boton de la tarjeta legionario
btn1.addEventListener("mouseover", function(){
  btn1.style.backgroundColor= "rgb(161, 5, 200)";
  btn1.style.color= "white";
});

btn1.addEventListener("mouseout", function(){
  btn1.style.backgroundColor= "";
  btn1.style.color="";
});

//tarjeta espartano
let espartano = document.getElementById("card-espartano");
let btn2 = document.getElementById("btn-suscripcion2");

// Agregar el evento mouseover a la tarjeta
espartano.addEventListener("mouseover", function() {
  espartano.style.boxShadow = "0px 0px 10px rgb(212, 34, 34)";
});

// Agregar el evento mouseout a la tarjeta
espartano.addEventListener("mouseout", function() {
  espartano.style.boxShadow = "none";
});

//Boton de la tarjeta espartano
btn2.addEventListener("mouseover", function(){
  btn2.style.backgroundColor= "rgb(212, 34, 34)";
  btn2.style.color= "white";
});

btn2.addEventListener("mouseout", function(){
  btn2.style.backgroundColor= "";
  btn2.style.color="";
});

//Tarjeta tercio
let tercio = document.getElementById("card-tercio");
let btn3 = document.getElementById("btn-suscripcion3");

// Agregar el evento mouseover a la tarjeta
tercio.addEventListener("mouseover", function() {
  tercio.style.boxShadow = "0px 0px 10px rgb(246, 158, 6)";
});

// Agregar el evento mouseout a la tarjeta
tercio.addEventListener("mouseout", function() {
  tercio.style.boxShadow = "none";
});

//Boton de la tarjeta tercio
btn3.addEventListener("mouseover", function(){
  btn3.style.backgroundColor= "rgb(246, 158, 6)";
  btn3.style.color= "white";
});

btn3.addEventListener("mouseout", function(){
  btn3.style.backgroundColor= "";
  btn3.style.color="";
});

//tarjeta navy seal
let navy = document.getElementById("card-navy");
let btn4 = document.getElementById("btn-suscripcion4");

// Agregar el evento mouseover a la tarjeta
navy.addEventListener("mouseover", function() {
  navy.style.boxShadow = "0px 0px 10px rgb(6, 66, 246)";
});

// Agregar el evento mouseout a la tarjeta
navy.addEventListener("mouseout", function() {
  navy.style.boxShadow = "none";
});

//Boton de la tarjeta navy seal
btn4.addEventListener("mouseover", function(){
  btn4.style.backgroundColor= "rgb(6, 66, 246)";
  btn4.style.color= "white";
});

btn4.addEventListener("mouseout", function(){
  btn4.style.backgroundColor= "";
  btn4.style.color="";
});

//Uso del DOM para estilo en la navabar
let botonBarra = document.getElementById("botonBarra1")

botonBarra.addEventListener("mouseover", function() {
    botonBarra.style.color= "white";
    botonBarra.style.backgroundColor = "rgb(194, 10, 10)";
    botonBarra.style.boxShadow= "2px 2px 5px black";
    botonBarra.style.cursor= "pointer";

    botonBarra.addEventListener("mouseout", function() {
      botonBarra.style.color = "";
      botonBarra.style.backgroundColor = ""; 
      botonBarra.style.boxShadow = ""; 
      botonBarra.style.cursor = ""; 
  });
});

//FUNCION PARA CAMBIAR AUTOMATICAMENTE LAS IMAGENES DEL CARRUSEL



//CODIGO PARA CARGAR INFORMACIÓN DEL ARCHIVO JSON AL CARRUSEL USANDO FETCH

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







