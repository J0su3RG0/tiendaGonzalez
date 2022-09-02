
/* Constructor de productos */
class Productos {
    constructor(literal){
    this.id = literal.id;
    this.nombre = literal.nombre;
    this.precio = literal.precio;
    this.descripcion = literal.descripcion;
    this.carrito = false;
}
    agregarCarrito(){
        console.log("Agregar al Carrito");
        this.carrito = true;
    }
    quitarCarrito(){
        console.log("Quitar del Carrito");
        this.carrito = false;
    }
}

/******************************/


/* Array de objetos construidos */

const producto1 = new Productos({ id: 1, nombre: "BadUSB", precio: 300, descripcion: "Una BadUSB que emula un teclado que inyecta pulsaciones automaticas"});
const producto2 = new Productos({ id: 2, nombre: "WiFi PineApple", precion: 1200, descripcion: "Una estación de WiFi con capacidad de probar la seguridad de redes inalambricas"});
const producto3 = new Productos({ id: 3, nombre: "Raspberry Pi", precio: 600, descripcion: "Un mini ordenador de placa reducida"});
const producto4 = new Productos({ id: 4, nombre: "Bash Bunny", precio: 350, descripcion: "Bad USB avanzada que cuenta con función de código remoto a traves de una conexion WiFi"});
const producto5 = new Productos({ id: 5, nombre: "Ubertooth One", precio: 2500, descripcion: "Ubertooth One es un transceptor configurable de 2.4 GHz con gran software de aplicación y soporte; y con potencia de transmisión adecuada y sensibilidad de recepción el desarrollo de 2.4 GHz"});
const producto6 = new Productos({ id: 6, nombre: "Alfa AC1900", precio: 2000, descripcion: "Adaptador WiFi de alta potencia con capacidad de cambiar a modo monitor e inyección de paquetes"});

/******************************/


/* Funcion de agregar productos al carrito */

const miCarrito = []; // Este array será el carrito
let agregado;   // Esta variable estará relacionada con los EventListener de cada botón que añada un Producto al Carrito

// Se llamara a esta función cuando el usuario de clic en uno de los botones de añadir al carrito
function carrito(){
    miCarrito.push(agregado); // Esta parte tal vez se añada a la funcion constructora de Productos
}

// Otra opcion

// miCarrito = misProductos.filter((el) => el.carrito.includes(true));




const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]
 
const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) // 66250