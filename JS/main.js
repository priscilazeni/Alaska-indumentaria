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

// // A CORREGIR: CUANDO EL USUARIO ELIGE SEGUIR COMPRANDO COMO VOLVER A MOSTRARLE LOS PRODUCTOS EN STOCK Y QUE SIGA EL BUCLE SIN NECESIDAD DE INGRESAR DIRECTAMENTE EL NOMBRE DE UNA PRENDA, EN LUGAR DE ESO QUE DIGA "SEGUIR COMPRANDO" O "SI" PARA PODER HACERLO.

// // CUANDO ESCRIBO EN MAYUSCULA CON EL TOLOWERCASE NO LO PASA A MINISCULA Y NO RECONOCE EL PRODUCTO, Y SINO DONDE PONERLO PARA QUE LO HAGA.

const nombre = prompt("Ingresa tu nombre")
alert("Hola " + nombre + ", Bienvenida a Mango Indumentaria")
alert("Las prendas en stock actualmente son " + (buzo.nombre) + " , " + (pantalon.nombre) + " , " + (camisa.nombre) + " , " + (remera.nombre) + ".")
let prendaSeleccionada = prompt("Que prenda queres comprar?")
let cantidadSeleccionada = 0
let seguirComprando = true

while (seguirComprando != false) {
    switch (prendaSeleccionada) {
        case buzo.nombre.toLowerCase():
            alert("Seleccionaste " + buzo.nombre);
            alert("El color en stock es " + buzo.color + " y el talle es " + buzo.talle);
            alert("El costo por unidad es de $" + buzo.precio);
            cantidadSeleccionada = parseInt(prompt("Cuantos " + buzo.nombre + " queres comprar?"));
            if (cantidadSeleccionada > buzo.cantidad) {
                alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
                cantidadSeleccionada = parseInt(prompt("Cuantos " + buzo.nombre + " queres comprar?"))
            } else {
                alert("Queres comprar " + cantidadSeleccionada + " " + buzo.nombre);
            }
            seguirComprando = confirm("Queres seguir comprando?");
            if (seguirComprando == true) {
                prendaSeleccionada = prompt("Que prenda queres comprar?")
            }
            break;

        case pantalon.nombre.toLowerCase():
            alert("Seleccionaste " + pantalon.nombre);
            alert("El color en stock es " + pantalon.color + " y el talle es " + pantalon.talle);
            alert("El costo por unidad es de $" + pantalon.precio);
            cantidadSeleccionada = parseInt(prompt("Cuantos " + pantalon.nombre + " queres comprar?"));
            if (cantidadSeleccionada > pantalon.cantidad) {
                alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
                cantidadSeleccionada = parseInt(prompt("Cuantos " + pantalon.nombre + " queres comprar?"))
            } else {
                alert("Queres comprar " + cantidadSeleccionada + " " + pantalon.nombre);
            }
            seguirComprando = confirm("Queres seguir comprando?");
            if (seguirComprando == true) {
                prendaSeleccionada = prompt("Que prenda queres comprar?")
            }
            break;

        case camisa.nombre.toLowerCase():
            alert("Seleccionaste " + camisa.nombre);
            alert("El color en stock es " + camisa.color + " y el talle es " + camisa.talle);
            alert("El costo por unidad es de $" + camisa.precio);
            cantidadSeleccionada = parseInt(prompt("Cuantos " + camisa.nombre + " queres comprar?"));
            if (cantidadSeleccionada > camisa.cantidad) {
                alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
                cantidadSeleccionada = parseInt(prompt("Cuantos " + camisa.nombre + " queres comprar?"))
            } else {
                alert("Queres comprar " + cantidadSeleccionada + " " + camisa.nombre);
            }
            seguirComprando = confirm("Queres seguir comprando?");
            if (seguirComprando == true) {
                prendaSeleccionada = prompt("Que prenda queres comprar?")
            }
            break;

        case remera.nombre.toLowerCase():
            alert("Seleccionaste " + remera.nombre);
            alert("El color en stock es " + remera.color + " y el talle es " + remera.talle);
            alert("El costo por unidad es de $" + remera.precio);
            cantidadSeleccionada = parseInt(prompt("Cuantos " + remera.nombre + " queres comprar?"));
            if (cantidadSeleccionada > remera.cantidad) {
                alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
                cantidadSeleccionada = parseInt(prompt("Cuantos " + remera.nombre + " queres comprar?"))
            } else {
                alert("Queres comprar " + cantidadSeleccionada + " " + remera.nombre);
            }
            seguirComprando = confirm("Queres seguir comprando?");
            if (seguirComprando == true) {
                prendaSeleccionada = prompt("Que prenda queres comprar?")
            }
            break;


        default:
            alert("Esta prenda no esta actualmente en stock");
    }
}

// 3.MOSTRAR LOS PRODUCTOS DEL CARRITO, CANTIDADES Y SUBTOTAL

let Subtotal = precio * cantidadSeleccionada

function subtotal () {

    switch (Subtotal) {
        case prendaSeleccionada == buzo.nombre:
            alert("El subtotal de  la compra es de " +Subtotal);
            break;
        case prendaSeleccionada == pantalon.nombre:
            alert("El subtotal de  la compra es de " +Subtotal);
            break;
        case prendaSeleccionada == camisa.nombre:
            alert("El subtotal de  la compra es de " +Subtotal);
            break;
        case prendaSeleccionada == remera.nombre:
            alert("El subtotal de  la compra es de " +Subtotal);
            break;
        default:
            ("Los datos ingresados no son correctos");
    }
}

subtotal ();

//4.DAR A ELEGIR ENVIO O RETIRO POR EL LOCAL

let envio = prompt("Elegi ENVIO A DOMICILIO o RETIRARLO POR UN LOCAL")

if (envio == "envio a domicilio") {
    envio = prompt("Ingresa tus datos: nombre completo, domicilio, localidad, codigo postal y telefono de contacto.")
} else {
    alert("Podes retirar tu pedido por el local de Olivos dentro de los proximos 7 dias habiles, te enviaremos un mensaje cuando ya este disponible")
}

//5.MOSTRAR EL PRECIO TOTAL ABONAR


