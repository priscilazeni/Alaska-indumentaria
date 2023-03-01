const productos = []; //Array que contiene los objetos (las prendas)

class Prendas { //Clase constructora con la cual arme los objetos
    constructor(id, nombre, color, talle1, talle2, talle3, talle4, cantidad, precio, categoria, img, img2,) {
        this.id = id
        this.nombre = nombre;
        this.color = color;
        this.talle1 = talle1; 
        this.talle2 = talle2; 
        this.talle3 = talle3; 
        this.talle4 = talle4; 
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.img = img;
        this.img2 = img2;
    }
}

productos.push(new Prendas("id: 1", "buzo buda", "blanco", "s", "m", "l", "xl", 10, 10000, "buzos", "./multimedia/buzo-buda.jpg", "./multimedia/buzo-buda2.jpg"))

productos.push(new Prendas("id: 2", "jogger washed", "celeste", "44", "46", "48", "50", 5, 12000, "pantalones", "./multimedia/jogger-washed.jpg", "./multimedia/jogger-washed2.jpg"))

productos.push(new Prendas("id: 3", "camisa firenze", "amarillo", "s", "m", "l", "xl", 7, 9000, "camisas", "./multimedia/camisa-firenze.jpg", "./multimedia/camisa-firenze2.jpg"))

productos.push(new Prendas("id: 4", "remera roma", "blanco", "s", "m", "l", "xl", 10, 6000, "remeras", "./multimedia/remera-roma.jpg", "./multimedia/remera-roma2.jpg"))

productos.push(new Prendas("id: 5", "hoodie power", "negro", "s", "m", "l", "xl", 10, 11000, "buzos", "./multimedia/hoodie-power.jpg", "./multimedia/hoodie-power2.jpg"))

productos.push(new Prendas("id: 6", "jean boyfriend", "azul", "42", "44", "46", "48", 8, 13000, "pantalones", "./multimedia/jean-boyfriend2.jpg", "./multimedia/jean-boyfriend.jpg"))

productos.push(new Prendas("id: 7", "camisa bow", "blanco", "s", "m", "l", "xl", 12, 12000, "camisas", "./multimedia/camisa-bow.jpg", "./multimedia/camisa-bow2.jpg"))

productos.push(new Prendas("id: 8", "remera otis", "rosa", "s", "m", "l", "xl", 10, 7000, "remeras", "./multimedia/remera-otis.jpg", "./multimedia/remera-otis2.jpg"))


