//1.CREAR PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS, PRECIOS, CANTIDAD, ETC

const buzo = {
    nombre: "Buzo Anorak",
    color: "Negro",
    talle: "XL",
    cantidad: 10,
    precio: 7000
}

const pantalon = {
    nombre: "Jean Regular",
    color: "Azul",
    talle: 48,
    cantidad: 5,
    precio: 10000
}

const camisa = {
    nombre: "Camisa Firenze",
    color: "Blanco",
    talle: "M",
    cantidad: 7,
    precio: 5000
}

const remera = {
    nombre: "Remera Roma",
    color: "Rojo",
    talle: "S",
    cantidad: 10,
    precio: 3000
}

// //2.INTERACCION CON EL USUARIO, SELECCION DE ARTICULO A COMPRAR, CANTIDAD, ETC

// let prendaSeleccionada = ""
let cantidadSeleccionada = 0
let seguirComprando = true
let subtotal = 0

const nombre = prompt("Ingresa tu nombre")
alert("Hola " + nombre + ", Bienvenida a Mango Indumentaria")
alert("Las prendas en stock actualmente son " + (buzo.nombre) + " , " + (pantalon.nombre) + " , " + (camisa.nombre) + " , " + (remera.nombre) + ".")
let prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()


function comprar (objeto) {
    // prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()
    alert("Seleccionaste " + objeto.nombre);
    alert("El color en stock es " + objeto.color + " y el talle es " + objeto.talle);
    alert("El costo por unidad es de $" + objeto.precio);
    cantidadSeleccionada = parseInt(prompt("Cuantos " + objeto.nombre + " queres comprar?"));

    if (cantidadSeleccionada > objeto.cantidad) {
        alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
        cantidadSeleccionada = parseInt(prompt("Cuantos " + objeto.nombre + " queres comprar?"))
    } else {
        alert("Queres comprar " + cantidadSeleccionada + " " + objeto.nombre);
    }

    seguirComprando = confirm("Queres seguir comprando?");

    // subtotal += cantidadSeleccionada * objeto.precio
    // alert ("El subtotal de tu compra es de $ "+subtotal)

    if (seguirComprando == true) {
        prendaSeleccionada = prompt("Que prenda queres comprar?")
     } else {
        subtotal += cantidadSeleccionada * objeto.precio
        alert ("El subtotal de tu compra es de $"+subtotal)
     }

}

// cuando elijo dos prendas para comprar distintas, no me suma las cantidades ni los precios, me toma el precio de la ultima prende elejida

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
            alert("Las prendas en stock actualmente son " + (buzo.nombre) + " , " + (pantalon.nombre) + " , " + (camisa.nombre) + " , " + (remera.nombre) + ".")
            prendaSeleccionada = prompt("Que prenda queres comprar?").toLowerCase()
           
    }

}

//4.DAR A ELEGIR ENVIO O RETIRO POR EL LOCAL Y TOTAL DE LA COMPRA

let envio = prompt ("Elegi ENVIO A DOMICILIO o RETIRAR POR EL LOCAL").toLowerCase()
let datosEnvio = ""
let datosRetiro = ""
let totalAbonar = subtotal + 1500

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
