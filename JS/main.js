//1.CREAR PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS, PRECIOS, CANTIDAD, ETC

const nombrePrendas = [];
class Prendas {
    constructor(nombre, color, talle, cantidad, precio) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = precio;
        nombrePrendas.push(nombre)
    }
}

const buzoAnorak = new Prendas("Buzo Anorak", "Verde Lima", "XL", 10, 10000)
const joggerWashed = new Prendas("Jogger Washed", "Negro", "48", 5, 12000)
const camisaFirenze = new Prendas("Camisa Firenze", "Blanco", "M", 7, 9000)
const remeraRoma = new Prendas("Remera Roma", "Blanco", "S", 10, 6000)
const buzoCapa = new Prendas("Buzo Capa", "Rosa", "S", 10, 11000)
const jeanBoyfriend = new Prendas("Jean Boyfriend", "Azul", "42", 8, 13000)
const camisaBow = new Prendas("Camisa Bow", "Blanco", "M", 12, 12000)
const remeraNudos = new Prendas("Remera Nudos", "Negro", "S", 10, 7000)

// //2.INTERACCION CON EL USUARIO, SELECCION DE ARTICULO A COMPRAR, CANTIDAD. MUESTRA DE SUBTOTAL DE LA COMPRA

let cantidadSeleccionada = 0
let seguirComprando = true
let subtotal = 0

const nombre = prompt("Ingresa tu nombre")
alert("Hola " + nombre + ", Bienvenida a la tienda de Alaska")
alert("Las prendas en stock actualmente son " + nombrePrendas.join(", "))
let prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()


function comprar(objeto) {
    alert("Seleccionaste " + objeto.nombre);
    alert("El color en stock es " + objeto.color + " y el talle es " + objeto.talle);
    alert("El costo por unidad es de $" + objeto.precio);
    cantidadSeleccionada = parseInt(prompt("Cuantos " + objeto.nombre + " queres comprar?"));

    if (cantidadSeleccionada > objeto.cantidad) {
        alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
        cantidadSeleccionada = parseInt(prompt("Cuantos " + objeto.nombre + " queres comprar?"))
    } else {
        alert("Queres comprar " + cantidadSeleccionada + " " + objeto.nombre);
        subtotal += cantidadSeleccionada * objeto.precio
    }

    seguirComprando = confirm("Queres seguir comprando?");


    if (seguirComprando == true) {
        prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()
    } else {
        alert("El subtotal de tu compra es de $" + subtotal)
    }

}


while (seguirComprando != false) {
    switch (prendaSeleccionada) {
        case buzoAnorak.nombre.toLowerCase():
            comprar(buzoAnorak);
            break;

        case joggerWashed.nombre.toLowerCase():
            comprar(joggerWashed);
            break;

        case camisaFirenze.nombre.toLowerCase():
            comprar(camisaFirenze);
            break;

        case remeraRoma.nombre.toLowerCase():
            comprar(remeraRoma);
            break;

        case jeanBoyfriend.nombre.toLowerCase():
            comprar(jeanBoyfriend);
            break;

        case buzoCapa.nombre.toLowerCase():
            comprar(buzoCapa);
            break;

        case camisaBow.nombre.toLowerCase():
            comprar(camisaBow);
            break;

        case remeraNudos.nombre.toLowerCase():
            comprar(remeraNudos);
            break;

        default:
            alert("La prenda seleccionada no esta en stock actualmente, por favor ingrese otra prenda");
            alert("Las prendas en stock actualmente son " + nombrePrendas.join(", "))
            prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()

    }

}

//3.DAR A ELEGIR ENVIO O RETIRO POR EL LOCAL Y TOTAL DE LA COMPRA

let envio = prompt("Elegi ENVIO A DOMICILIO o RETIRAR POR EL LOCAL").toLowerCase()
let datosEnvio = ""
let datosRetiro = ""
let totalAbonar = subtotal + 2000

function Envio() {

    if ((envio == "envio a domicilio") && (subtotal >= 10000)) {
        alert("El envio a domicilio es gratis")
        alert("El total abonar es $" + subtotal)
        datosEnvio = prompt("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
    } else if ((envio == "envio a domicilio") && (subtotal < 10000)) {
        alert("El costo del envio a domicilio es de $1500")
        alert("El total abonar es $" + totalAbonar)
        datosEnvio = prompt("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
    } else {
        datosRetiro = prompt("Tu pedido estara disponible para retirar en los proximos 7 dias habiles, te enviaremos un mensaje cuando este disponible. Dejanos tu nombre completo y telefono")
    }

}

Envio();

