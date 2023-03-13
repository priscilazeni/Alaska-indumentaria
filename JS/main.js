const contenedor = document.getElementById("contenedor");

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// abrir y cerrar ventana modal

if (document.getElementById("carrito")){
    const modal = document.getElementById("miModal");
    const btn = document.getElementById("carrito");
    const span = document.getElementsByClassName("cerrar")[0];
    const body = document.getElementsByTagName("body")[0];

    btn.onclick = function() { // se muestra ventana modal haciendo click en carrito
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() { // se oculta haciendo click en la X span
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(e) { // se cierra la ventana al hacer click por fuera de ella
        if (e.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

// fetch

let productos = []; // array vacio que va a contener los productos a renderizar

fetch('./JSON/data.json')
.then((response) => response.json())
.then((data) => {
    productos = data;
    mostrarProductos(productos);
})


// renderizacion de las cards

function mostrarProductos(array) {

    contenedor.innerHTML= '';
    array.forEach((producto) => {
    const divProd = document.createElement("div");
    divProd.classList.add("card");
    divProd.innerHTML = `

    <div class="imgContenedor">
        <img src="${producto.img}" alt="${producto.nombre}">
        <img src="${producto.img2}" alt="${producto.nombre}">
    </div>

    <div class="infoContenedor">
        <div class="infoUno">
            <p class="titulo">${producto.nombre.toUpperCase()}</p>
            <p "precio"><b>$${producto.precio}</b></p>
        </div>

        <div class="detalleContenedor">
            <p class="color"><b>COLOR:</b> ${producto.color.toUpperCase()}</p>
        </div>

        <div>
            <p class="talle"><b>TALLE:</b> ${producto.talle.toUpperCase()}</p>
        </div>
    </div>

        <input type="button" value="AGREGAR" id="${producto.id}" class="btnCarrito">`

        contenedor.appendChild(divProd);

        const btnComprar = document.getElementById(`${producto.id}`);

        btnComprar.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
            Toastify({ // libreria toastify que provee el alert que indica que se agrego un producto al carrito
                text: "Agregaste un producto al carrito",
                duration: 1500,
                style: {
                    background: 'rgba(7,7,7,7.2)',
                },
            }).showToast();
        })
    });

}


// agregando productos al carrito

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) { // si el producto esta en el carrito aunmenta su cantidad
        carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
            totalCarrito()
            localStorage.setItem('carrito', JSON.stringify(carrito)) 
        })

    } else  { // si el producto no esta lo agrega al carrito
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item);
        totalCarrito()
        localStorage.setItem('carrito', JSON.stringify(carrito)) 
    }
   
    actualizarCarrito();
}

// actualizacion carrito

const modalContenido = document.getElementById('modalContenido');
const total = document.getElementById('total');

const actualizarCarrito = () => { // renderiza por card seleccionada, agregada al carrito
    modalContenido.innerHTML = ""
    carrito.forEach((prod) => {

        const divProdEnCarrito = document.createElement("div");
        divProdEnCarrito.className = ("prodSeleccionado");
        divProdEnCarrito.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}" class="imgProdCarrito">
        <div class='prodInfo'
            <p id="producto">${prod.nombre. toUpperCase()}</p>
            <p class="precio">$${prod.precio}</p>
            <p id='cantidad'>CANTIDAD: ${prod.cantidad}</p>
            <button id='btnEliminar-${prod.id}' class='btnEliminar'>ELIMINAR</button>   
        </div>

        `
        modalContenido.appendChild(divProdEnCarrito);

        let btnEliminar = document.getElementById(`btnEliminar-${prod.id}`)
        btnEliminar.addEventListener('click', () => {
            eliminarDelCarrito(prod.id)
        })

    });

}

// eliminar producto del carrito 


const eliminarDelCarrito = (prodId) => {
    
    const item = carrito.find((prod) => prod.id === prodId) 
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito)) 
    totalCarrito()
    actualizarCarrito();

}

// precio total y validacion del envio

const totalAbonar = document.getElementById("total")
const envio = document.getElementById("envio")
let totalEnvio = 0
let envioGratis = 8000

const totalCarrito = () => {
    const totalCarrito = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    totalAbonar.innerHTML = `TOTAL $${totalCarrito}`
    if (totalCarrito < envioGratis) {
        totalEnvio = totalCarrito * 0.20
        envio.innerHTML = `ENVIO $${totalEnvio}`;
        } else {
        envio.innerHTML = `EL ENVIO ES GRATIS!`
    }
}


// filtro del navegador por categorias 


let filtroPrendas = document.getElementsByClassName("btnFiltro");

for (const filtro of filtroPrendas) {
    filtro.addEventListener("click", filtrarCategoria);
}

 function filtrarCategoria(e) {
    e.preventDefault()
    const categoria = e.target.id;  
    const resultado = productos.filter(producto => producto.categoria.includes(categoria));
    mostrarProductos(resultado);
}

// al hacer click en el logo se vuelve al inicio donde figuran todas las prendas

const logo = document.getElementById("logo")
logo.addEventListener("click", () => {
    mostrarProductos(productos);
})