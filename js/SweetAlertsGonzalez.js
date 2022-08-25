let miCarrito = []; //El array del carrito
let carritoJS; // Carrito en JS
let carritoLS = []; //Array para guardar valor en local storage
let clave; //Variable para usar la propiedad key
let claveCarrito; //Variable para acceder a la clave del carrito
let valor; //Variable para acceder a los valores almacenados en LS
let suma = 0; //Variable para sumar precios
let total = 0; //Acumulador
let lsTotal = 0; //Variable para guardar en localStorage
let mostrarTotal; // Variable para mostrar total en la pagina
let container; // Declaracion del contenedor para mostrar el carrito
let listaDeCompras; // Lista de compras
let lista // Variable para mostrar la lista de compras en la pagina
let comproAlgo //Variable de control para saber si el usuario dio comprar o no

// Declaracion de las variables para botones
let botonEP = document.getElementById("btnElPrincipito");
let botonGyP = document.getElementById("btnGuerraYPaz");
let botonCyC = document.getElementById("btnCrimenYCastigo");
let botonOPZ = document.getElementById("btnOrgulloPrejuicioYZombies");
let botonBB = document.getElementById("btnBashBunny");
let botonRD = document.getElementById("btnRubberDucky");
let botonLT = document.getElementById("btnLandTurtle");
let botonWFPA = document.getElementById("btnWifiPinneApple");

// Funcion que agregan elementos al carrito y hacen la sumatoria de precios
function agregarCarrito(elemento){
    miCarrito.push(elemento);
    carritoJS = JSON.stringify(miCarrito);   //stringify del carrito para almacenar en LS
    localStorage.setItem('claveCarrito', carritoJS); // Almacenamiento en LS
    console.log("Mi carrito " + miCarrito); //Console log para ver que el codigo haga lo que se propone
}

function sumatoria() {
    total = total + suma;
    localStorage.setItem('lsTotal', total);  //Guardar el total en LS
    console.log("Total " + total);  //Console log para ver que el codigo haga lo que se propone
}

// Añadiendo el EventListener
botonEP.addEventListener("click", principito);
botonGyP.addEventListener("click", guerraPaz);
botonCyC.addEventListener("click", crimencastigo);
botonOPZ.addEventListener("click", orgulloprejuiciozombies);
botonBB.addEventListener("click", bashbunny);
botonRD.addEventListener("click", rubberducky);
botonLT.addEventListener("click", landturtle);
botonWFPA.addEventListener("click", wifipinneapple);

/* JSON *//* JSON *//* JSON *//* JSON *//* JSON */
// Secuencia IF para ver si hay items guardados en el carrito y su costo final

if (localStorage.key(0) != null) {
    clave = localStorage.key(lsTotal);
    total = localStorage.getItem(clave);
    total = parseInt(total);
    console.log(total);
    mostrarCosto();
}

// Secuencia if para los elementos
if (localStorage.key(1) != null) {
    carritoLS = localStorage.key(1);
    miCarrito = JSON.parse(localStorage.getItem(carritoLS));
    // Ciclo
    for ( let i = 0; i < miCarrito.length; i++) {
    listaDeCompras = document.createElement('ul');
    lista = document.getElementById('lista');
    listaDeCompras.innerHTML = `<li>${miCarrito[i]}</li>`
    lista.append(listaDeCompras);
}
}
/* JSON *//* JSON *//* JSON *//* JSON *//* JSON */


// Funciones para agregar elementos al carrito
function principito (){
    elemento = "El Principito";
    suma = 300;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function guerraPaz (){
    elemento = "Guerra y Paz";
    suma = 600;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function crimencastigo (){
    elemento = "Crimen y Castigo";
    suma = 500;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function orgulloprejuiciozombies (){
    elemento = "Orgullo, Prejuicio y Zombies";
    suma = 800;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function bashbunny (){
    elemento = "Bash Bunny";
    suma = 900;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function rubberducky (){
    elemento = "Rubber Ducky";
    suma = 700;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function landturtle (){
    elemento = "Land Turtle";
    suma = 750;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}

function wifipinneapple (){
    elemento = "WiFi Pinne Apple";
    suma = 1500;
    agregarCarrito(elemento);
    sumatoria();
    mostrarCosto();
    mostrarlista();
}



// Vel la lista del carrito
function mostrarlista () {
listaDeCompras = document.createElement('ul');
lista = document.getElementById('lista');
//Ciclo for of para mostrar el carrito de compras en la pagina web
for(const producto of miCarrito){
    listaDeCompras.innerHTML = `<li>${producto}</li>`
}
    lista.append(listaDeCompras);
}


// Ver el contenido del carrito y el total a pagar
function mostrarCosto () {
    mostrarTotal = document.getElementById('listaCompras');
    mostrarTotal.innerText = `    ${total}`;
}




/* Sweet Alerts */  /* Sweet Alerts */  /* Sweet Alerts */  /* Sweet Alerts */

// Funcion de vaciar el carrito utilizando SweetAlerts
function vaciarCarrito() {
    Swal.fire({
        title: 'Confirmación',
        text: '¿Vaciar carrito?',
        icon: 'question',
        showConfirmButton: true,
        color: 'red',
        background: 'yellow',
        showCancelButton: true,
        confirmButtonText: 'Sí :(',
        cancelButtonText: 'No, mantener',

    }) .then((result) => {

        if (result.isConfirmed) {
            localStorage.clear();
            location.reload();
        }
    })}

// Funcion en caso de carrito vacio
function preguntarVaciar(){
if (total != 0){
    vaciarCarrito();
} else { // En caso de que el carrito este vacio
        Swal.fire({
            title: 'Carro Vacio',
            text: 'Su carrito esta vacio',
            icon: 'info',
            confirmButtonText: 'Que mal'
        })
    }}


// Funcion para realizar la compra utilizando SweetAlerts
function realizarCompra() {
    if (total != 0){
    Swal.fire({
        title: 'Confirmación',
        text: '¿Está seguro de realizar el pedido?',
        icon: 'question',
        showConfirmButton: true,
        color: 'white',
        background: '#716add',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, aún no',

    }) . then((result) => { //Mensaje de compra realizada

        if (result.isConfirmed) {
        Swal.fire({
            title: 'Felicidades',
            text: 'Su compra se ha efectuado con exito',
            icon: 'success',
            showConfirmButton: false,
            timer: 4000,
            color: 'white',
            background: '#716add',
    
        }) .then((result => {   // Una vez realizado el pedido vaciar carrito
            localStorage.clear();
            location.reload(); // Re carga la pagina
            
        }))}
    })

    } else { // En caso de que el carrito este vacio
        Swal.fire({
            title: 'Carro Vacio',
            text: 'Su carrito esta vacio',
            icon: 'info',
            confirmButtonText: 'Que mal'
        })
    }}
/* Fin de Sweet Alerts */   /* Fin de Sweet Alerts */   /* Fin de Sweet Alerts */   /* Fin de Sweet Alerts */


/* Operadores Avanzados y Tostify */
var today = new Date();
var hourNow = today.getHours();
var greeting;

hourNow > 18 ? greeting = 'Buenas noches Tutores' : hourNow > 12 ? greeting = 'Buenas tardes Tutores' : hourNow > 0 ? greeting = 'Buenos días Tutores' : greeting = 'Hola!';


Toastify({
    text: `${greeting}`,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'left',
    style: {
        background: 'linear-gradient(to right, #00b09b, #96c92d)'
    }
}) .showToast();
/* Operadores Avanzados y Tostify */


/* API emailJS */
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Realizar Compra';

   console.log("Alerta de seguimiento")
   const serviceID = 'default_service';
   const templateID = 'template_qbsyrea';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Realizar Compra';
    }, (err) => {
      btn.value = 'Realizar Compra';
      alert(JSON.stringify(err));
    });
});
/*********************************/