// Construccion de las Card

const contenedor = document.getElementById("contenedor");
const modal = document.getElementById("modal");
let carrito = [];

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

        <input type="button" value="COMPRAR" id="${producto.id}" class="btnCarrito">`

        contenedor.appendChild(divProd);
    
        const btnComprar = document.getElementById(`${producto.id}`);

        btnComprar.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    });
}

mostrarProductos(productos);

// agregando productos al carrito

const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item);
    actualizarCarrito();
    console.log(carrito);
}

// Carrito y actualizacion

const actualizarCarrito = () => {
    modal.innerHTML = ""
    carrito.forEach((prod) => {

        const divProdEnCarrito = document.createElement("div");
        divProdEnCarrito.className = ("prodSeleccionado");
        divProdEnCarrito.innerHTML = `
        <p class="producto">${prod.nombre}</p>
        <img src="${prod.img}" alt="${prod.nombre}" class="imgProdCarrito">
        <p class="precio">precio: $ ${prod.precio}</p>
        <p class="cantidad">cantidad: ${prod.cantidad}</p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btnEliminar">ELIMINAR</button>             
        `
        modal.appendChild(divProdEnCarrito);
    });

}

// eliminar producto del carrito

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId) 
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito();
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