// Construccion del carrito

const contenedorCarrito = document.getElementById("mostrarCarrito");
const divCarrito = document.createElement("div");
divCarrito.classList.add("modal");
divCarrito.innerHTML = `
    <div class="resumenCarrito">
        <button class="cerrar">X</button>
        <p>Producto</p>
        <p class="precio">Precio unitario</p>
        <p class="cantidad">Cantidad</p>
    </div>

    <div class="compraFinal">
        <p class="resumen">RESUMEN DE COMPRA</p>
        <p class="subtotal">Subtotal</p>
        <p class="envio">Envio</p>
        <p class="total"><b>TOTAL</b></p>
        <button class="comprar">INICIAR COMPRA</button>
    </div> `

contenedorCarrito.appendChild(divCarrito);

// Abrir y cerrar carrito

// const abrirCarrito = document.getElementsByClassName("carrito");
// const cerrarCarrito = document.getElementsByClassName("cerrar");
// const modal = document.getElementsByClassName("modal");


// abrirCarrito.addEventListener("click", function() {
//     modal.style.display = "block";
// });


// cerrarCarrito.addEventListener("click", function() {
//     modal.style.display = "none";
// });

// modal.addEventListener("click", function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";    
//     }
// });


// filtro del navegador por categorias

let filtroPrendas = document.getElementsByClassName("btnFiltro");

for (const filtro of filtroPrendas) {
    filtro.addEventListener("click", mostrarCategoria);
}

 function mostrarCategoria(e) {
    e.preventDefault()
    const categoria = e.target.id;  
    const resultado = productos.filter(producto => producto.categoria.includes(categoria));
    contenedor.innerHTML= '';
    resultado.forEach((producto) => {
        const divProd = document.createElement("div");
        divProd.classList.add("card");
        divProd.innerHTML = `
    <div class="imgContenedor">
        <img src="${producto.img}" alt="${producto.nombre}">
        <img src="${producto.img2}" alt="${producto.nombre}">
    </div>

    <div class="infoContenedor">
        <div class="infoUno">
            <p class=""titulo>${producto.nombre}</p>
            <p><b>$${producto.precio}</b></p>
        </div>

        <div class="detalleContenedor">
            <p class="color"><b>color:</b> ${producto.color} </p>
        </div>

        <div>
            <p class="talle"><b>talle:</b> ${producto.talle}</p>
        </div>
    </div>

        <input type="button" value="COMPRAR" id="comprar" class="btnCarrito">`

            contenedor.appendChild(divProd);

            const btnCarrito = document.getElementById("comprar");

            btnCarrito.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            })
        });
}


// Construccion de las Card

const contenedor = document.getElementById("contenedor");

productos.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("card");
    divProd.innerHTML = `

    <div class="imgContenedor">
        <img src="${producto.img}" alt="${producto.nombre}">
        <img src="${producto.img2}" alt="${producto.nombre}">
    </div>

    <div class="infoContenedor">
        <div class="infoUno">
            <p class=""titulo>${producto.nombre}</p>
            <p><b>$${producto.precio}</b></p>
        </div>

        <div class="detalleContenedor">
            <p class="color"><b>color:</b> ${producto.color}</p>
        </div>

        <div>
            <p class="talle"><b>talle:</b> ${producto.talle}</p>
        </div>
    </div>

        <input type="button" value="COMPRAR" id="comprar" class="btnCarrito">`

    contenedor.appendChild(divProd);

    const btnCarrito = document.getElementById("comprar");

    btnCarrito.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })

});


// Agregando a carrito

let carrito = [];

const agregarAlCarrito = (productoId) => {
    const item = productos.find((producto) => producto.id === productoId);
    carrito.push(item);
    // console.log(carrito);
    console.log(item);
}


















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