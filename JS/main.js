//1.CREAR PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS, PRECIOS, CANTIDAD, ETC

const nombrePrendas = [];
class Prendas {
    constructor (nombre,color,talle,cantidad,precio) {
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = precio;
        nombrePrendas.push(nombre)
    }
}

const buzo = new Prendas("Buzo Anorak", "Negro", "XL", 10, 7000)
const pantalon = new Prendas("Jean Regular", "Azul", "48", 5, 10000)
const camisa = new Prendas("Camisa Firenze", "Blanco", "M", 7, 5000)    
const remera = new Prendas("Remera Roma", "Rojo", "S", 10, 3000)

// //2.INTERACCION CON EL USUARIO, SELECCION DE ARTICULO A COMPRAR, CANTIDAD. MUESTRA DE SUBTOTAL DE LA COMPRA

let cantidadSeleccionada = 0
let seguirComprando = true
let subtotal = 0

const nombre = prompt("Ingresa tu nombre")
alert("Hola " + nombre + ", Bienvenida a Racer Indumentaria")
alert("Las prendas en stock actualmente son "+nombrePrendas.join(", "))
let prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()


function comprar (objeto) {
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
        alert ("El subtotal de tu compra es de $"+subtotal)
     }

}


while (seguirComprando != false) {
    switch (prendaSeleccionada) {
        case buzo.nombre.toLowerCase():
            comprar(buzo);
            break;

        case pantalon.nombre.toLowerCase():
            comprar(pantalon);
            break;

        case camisa.nombre.toLowerCase():
            comprar(camisa);
            break;

        case remera.nombre.toLowerCase():
            comprar(remera);
            break;

        default:
            alert("La prenda seleccionada no esta en stock actualmente, por favor ingrese otra prenda");
            alert("Las prendas en stock actualmente son "+nombrePrendas.join(", "))
            prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()
           
    }

}

//3.DAR A ELEGIR ENVIO O RETIRO POR EL LOCAL Y TOTAL DE LA COMPRA

let envio = prompt ("Elegi ENVIO A DOMICILIO o RETIRAR POR EL LOCAL").toLowerCase()
let datosEnvio = ""
let datosRetiro = ""
let totalAbonar = subtotal + 1500

function Envio () {

    if ((envio == "envio a domicilio") && (subtotal >= 10000)) {
        alert ("El envio a domicilio es gratis")
        alert ("El total abonar es $"+subtotal)
        datosEnvio = prompt ("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
    } else if ((envio == "envio a domicilio") && (subtotal < 10000)) {
        alert ("El costo del envio a domicilio es de $1500")
        alert ("El total abonar es $"+totalAbonar)
        datosEnvio = prompt ("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
    } else {
        datosRetiro = prompt ("Tu pedido estara disponible para retirar en los proximos 7 dias habiles, te enviaremos un mensaje cuando este disponible. Dejanos tu nombre completo y telefono")
    }   

}   

Envio ();

