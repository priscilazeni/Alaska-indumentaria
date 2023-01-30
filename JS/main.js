//1.CREAR PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS, PRECIO, CANTIDAD, ETC
//2.INTERACCION CON EL USUARIO, SELECCION DE ARTICULO A COMPRAR, CANTIDAD, ETC
//3.ENUMERAR LOS PRODUCTOS DEL CARRITO EVITANDO REPETICIONES
//4.VACIAR EL CARRITO 
//5.CALCULAR PRECIO TOTAL, INCLUIDO LOS IMPUESTOS Y ENVIO

//1.CREAR PRODUCTOS CON SUS RESPECTIVAS CARACTERISTICAS, PRECIOS, CANTIDAD, ETC

const buzo = {
    nombre: "Buzo Anorak",
    color: "negro",
    talle: "XL",
    cantidad: 10,
    precio: 7000
}

const pantalon = {
    nombre: "Jean Regular",
    color: "azul",
    talle: 48,
    cantidad: 5,
    precio: 10000
}

const camisa = {
    nombre: "Camisa Firenze",
    color: "blanco",
    talle: "M",
    cantidad: 7,
    precio: 5000
}

const remera = {
    nombre: "Remera Roma",
    color: "rojo",
    talle: "S",
    cantidad: 10,
    precio: 3000
}

//2.INTERACCION CON EL USUARIO, SELECCION DE ARTICULO A COMPRAR, CANTIDAD, ETC

const nombre = prompt("Ingresa tu nombre")
alert("Hola " +nombre+ ", como estas?")
alert("Las prendas en stock actualmente son " + (buzo.nombre) + " , " + (pantalon.nombre) + " , " + (camisa.nombre) + " , " + (remera.nombre) + ".")
let prendaSeleccionada = prompt("Que prenda queres comprar?")

while (prendaSeleccionada != " ") {
    switch (prendaSeleccionada) {
        case buzo.nombre.toLowerCase() :
            alert("Seleccionaste Buzo Anorak");
            alert("El color en stock es negro y el talle es XL");
            break;

        case pantalon.nombre.toLowerCase() :
            alert("Seleccionaste Jean Regular");
            alert("El color en stock es azul y el talle es 48");
            break;

        case camisa.nombre.toLowerCase() :
            alert("Seleccionaste Camisa Firenze");
            alert("El color en stock es blanco y el talle es M");
            break;

        case remera.nombre.toLowerCase() :
            alert("Seleccionaste Remera Roma");
            alert("El color en stock es rojo y el talle es S");
            break;

        default:
            alert("Esta prenda no esta actualmente en stock");
    }
}

let cantidadSeleccionada = parseInt(prompt("Cuantos "+prendaSeleccionada+" queres comprar?"))
alert("Queres comprar "+cantidadSeleccionada+ " "+ prendaSeleccionada)