# proyecto-box-crossfit
Proyecto box de crossfit realizado con HTML, CSS, Bootstrap y JavaScript. 

Este proyecto fue creado usando HTML, CSS, Bootstrap y JavaScript. En el mismo se simula la pagina web de un box de crossfit que lleva por nombre "Warriors Box". 
En esta pagina los usuarios pueden obtener infomación sobre el box, leer comentarios positivos de personas que ya están suscritos a los entrenamientos en el warriors 
box, revisar planes de suscripción al box con diferentes precios, duración y tipo de asesoría, y por último visitar las diferentes redes sociales con las que cuenta 
el box para compartir información con su comunidad de usuarios.

Así mismo, cuando el usuario selecciona alguno de los planes de suscripción del Warrior Box es dirigido a un formulario de suscripción en el cual puede introducir sus
datos personales como nombre, apellido y edad, así como seleccionar la forma de pago y los datos de la tarjeta bancaria que utilizará para pagar la suscripción. 
Si el usuario decide suscribir se al warrior box debe ser mayor de edad para poder hacerlo satisfactoriamente, ya que de no ser mayor de edad su suscripción será
rechazada. En caso de suscribirse correctamente, el usuario podrá visualizar un mensaje de suscripción exitosa y asi mismo podrá revisar los datos de su suscripción
haciendo click en un botón que se desplagará luego de terminar su suscripción. 

Para realizar este proyecto se utilizó HTML, CSS y Bootstrap para maquetar la pagina web y añadir los estilos correspondientes así como para garantizar un diseño
resposive acorde a diferentes formatos de tamaño para diferentes dispositivos. 

En lo que respecta al uso del lenguaje de programación JavaScript, el mismo se utilizó para añadir las funcionalidades principales de la pagina del Warrior Box, como
son el formulario de suscripción y todas sus funcionalidades, los estilos de las tarjetas de suscripción y la administración de la información almacenada en un archivo
json para mostrarla en pantalla. 

En específico, en este proyecto se construyo el codigo de JavaScript empleando bucles for para generar dinámicamente las opciones de selección del usuario al
interactuar con el fomulario. Se utilzaron estructuras de control if, else para manejar de forma precisa las respuestas proporcionadas por el usuario y de esta manera
hacer que el codigo sea fluido y acorde a las funcionalidades propias del formulario creado. 

En lo que respecta al manejo de los datos introducidos por el usuario, los mismo fueron capturados, tratados y almacenados usando principalmente clases, objetos json
y el localstorage. En este sentido, se instanció una clase con los datos ingresados por el usuario en el formulario para almacenar estos datos en una constante "cliente"
que crea un objeto nuevo que luego se transformara en formato json para ser almacenado en el localStorage con los datos que lo conforman. Posteriormente, los datos
del usuario almacenados en el localStorage van a ser usados para desplegar los datos de suscripción exitosa del usuario mediante el uso de un alert creado con la 
librería sweetalert2. Esta librería también es usada para mostrar mensajes de suscripción exitosa y de suscripción rechazada en caso de ser menor de edad.

Para hacer uso del asincronismo de JavaScript, en este proyecto se realizó una petición fetch a un archivo JSON local, el cual contiene la información de cuatro
usuarios actuales del Warriors Box, como son su nombre, apellido, edad y comentario sobre su experiencia. Una vez realizada la petición fetch de manera exitosa los datos
del archivo JSON son mostrados en pantalla de manera dinámica en una carrusel de imagenes que se desplaza automáticamente usando código javaScript para simular el
evento click en los slices del carrusel.

En conclusión, este proyecto web permite visualizar la ejecución efectiva de código JavaScript para agregar funcionalidades elementales a una pagina web. En este proyecto se
implementó una gran amplitud de los conceptos, estructuras, fundamentos y complementos con los que cuenta el lenguaje de programación JavaScript para hacer
posible el desarrollo web y la creación de paginas web dinámicas y funcionales acorde a las necesidades del mundo actual. 



