// Construccion de las Card

const contenedor = document.getElementById("contenedor");
console.log(contenedor);

productos.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("card");
    divProd.innerHTML = `<a href="./pages/remeraOtis.html">
    <div class="imgContenedor">
        <img src="${producto.img}" alt="${producto.nombre}">
        <img src="${producto.img2}" alt="${producto.nombre}">
    </div>
    <div class="infoContenedor">
        <p>${producto.nombre}</p>
        <p><b>$${producto.precio}</b></p>
    </div>
    <input type="button" value="VER DETALLE" class="btnCarrito">
</a>`

    contenedor.appendChild(divProd);
})


// filtro del navegador por categorias
let filtroPrendas = document.getElementsByClassName("btnFiltro");

for (const filtro of filtroPrendas) {
    filtro.addEventListener("click", mostrarCategoria);
}

 function mostrarCategoria(e) {
    e.preventDefault()
    const id = e.target.id;
    console.log(id);
    const resultado = productos.filter(producto => producto.categoria.includes(e.target.id));
    console.log(resultado);
}

















// const carrito = [];

// let prendaSeleccionada = " "
// let objetoSeleccionado = " "
// let cantidadSeleccionada = 0
// let seguirComprando = true;
// let subtotal = 0;

// do {
//     const productosNombre = productos.map(productos => productos.nombre);
//     alert("Bienvenida a la tienda de Alaska.\nLas prendas en stock son :\n" +productosNombre.join(", "));
//     prendaSeleccionada = prompt("Que prenda queres comprar?\n" + productosNombre.join(", ")).toLowerCase();
//     objetoSeleccionado = productos.find(prod => prod.nombre.toLowerCase() == prendaSeleccionada);
//     alert("El color es: " + objetoSeleccionado.color + "\nEl talle es: " + objetoSeleccionado.talle + "\nEl precio es: $" + objetoSeleccionado.precio);
//     cantidadSeleccionada = parseInt(prompt("Cuantos " + objetoSeleccionado.nombre + " queres comprar?"));
//     if (cantidadSeleccionada > objetoSeleccionado.cantidad) {
//         alert("No contamos con el stock ingresado, por favor ingrese otra cantidad")
//         cantidadSeleccionada = parseInt(prompt("Cuantos " + objetoSeleccionado.nombre + " queres comprar?"))
//     } else {
//         alert("Queres comprar " + cantidadSeleccionada + " " + objetoSeleccionado.nombre);
//         subtotal += cantidadSeleccionada * objetoSeleccionado.precio;
//         objetoSeleccionado.cantidad = cantidadSeleccionada;
//         carrito.push(objetoSeleccionado);
//     }

//     seguirComprando = confirm("Queres seguir comprando?");

//     if (seguirComprando == true) {
        
//     } else {
//         mostrarCarrito();
//         alert("El subtotal de tu compra es de: $"+subtotal);
//     }

// } while (seguirComprando);



// function mostrarCarrito () {
//     let mensaje = "Estos son los productos de tu carrito\n";
//     carrito.forEach((producto) => {
//         mensaje += producto.nombre+ ": "+producto.cantidad+"\n";
//     })
//     alert(mensaje);
// }


// let envio = prompt("Elegi ENVIO A DOMICILIO o RETIRAR POR EL LOCAL").toLowerCase()
// let datosEnvio = ""
// let datosRetiro = ""
// let totalAbonar = subtotal + 2000

// function Envio() {

//     if ((envio == "envio a domicilio") && (subtotal >= 10000)) {
//         alert("El envio a domicilio es gratis")
//         alert("El total abonar es $" + subtotal)
//         datosEnvio = prompt("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
//     } else if ((envio == "envio a domicilio") && (subtotal < 10000)) {
//         alert("El costo del envio a domicilio es de $2000")
//         alert("El total abonar es $" + totalAbonar)
//         datosEnvio = prompt("Ingresa nombre completo, direccion, localidad, codigo postal y telefono para realizar el envio")
//     } else {
//         datosRetiro = prompt("Tu pedido estara disponible para retirar en los proximos 10 dias habiles, te enviaremos un mensaje cuando este disponible. Dejanos tu nombre completo y telefono")
//     }

// }

// Envio();