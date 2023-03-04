const contenedor = document.getElementById("contenedor");
const modal = document.getElementById("modal"); 

let carrito = [];

// abrir y cerrar ventana modal. NOTA (la ventana modal se cierra cuando hace click dentro de ella solo cuando no hay productos en el carrito, si hay productos no se cierra)

const abrirCarrito = document.getElementById('carrito')


abrirCarrito.addEventListener('click', function() {
    modal.style.display = 'block';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


// Construccion de las Card


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

    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else  {
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item);
    }
   
    actualizarCarrito();
}

// 


// localStorage. NOTA (al agregar storage me produce errores. ej: cuando agrego dos veces el mismo producto me suma la cantidad pero si agrego un nuevo producto me toma la misma cantidad que el primer producto elegido)

// document.addEventListener('DOMContentLoaded', () => {
//     if (localStorage.getItem('carrito')) {
//         carrito = JSON.parse(localStorage.getItem('carrito'))
//         actualizarCarrito()
//     }
// });


// actualizacion carrito. NOTA (no logro poder agregar un div para poder insertar el subtotal, envio y el total. Cuando lo pongo cada vez que agrego un producto al carrito desaparece el div)

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
        <button onclick = "eliminarDelCarrito()" class="btnEliminar">ELIMINAR</button>   

        `
        modal.appendChild(divProdEnCarrito);

        // localStorage.setItem('carrito', JSON.stringify(carrito))
    });

}

// eliminar producto del carrito . NOTA (al eliminar los productos elimina del ultimo elegido al primero, no el producto seleccionado)

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

// POR HACER :
// poner precio, envio y total en el carrito.
