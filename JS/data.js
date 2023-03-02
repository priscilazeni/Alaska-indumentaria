const productos = []; //Array que contiene los objetos (las prendas)

class Prendas { //Clase constructora con la cual arme los objetos
    constructor(id, nombre, color, talle, cantidad, precio, categoria, img, img2,) {
        this.id = id
        this.nombre = nombre;
        this.color = color;
        this.talle = talle; 
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.img = img;
        this.img2 = img2;
    }
}

productos.push(new Prendas("id: 1", "buzo buda", "blanco", "s", 10, 10000, "buzos", "./multimedia/buzo-buda.jpg", "./multimedia/buzo-buda2.jpg"))

productos.push(new Prendas("id: 2", "jogger washed", "celeste", "48", 5, 12000, "pantalones", "./multimedia/jogger-washed.jpg", "./multimedia/jogger-washed2.jpg"))

productos.push(new Prendas("id: 3", "camisa firenze", "amarillo", "l", 7, 9000, "camisas", "./multimedia/camisa-firenze.jpg", "./multimedia/camisa-firenze2.jpg"))

productos.push(new Prendas("id: 4", "remera roma", "blanco","m", 10, 6000, "remeras", "./multimedia/remera-roma.jpg", "./multimedia/remera-roma2.jpg"))

productos.push(new Prendas("id: 5", "hoodie power", "negro", "xl", 10, 11000, "buzos", "./multimedia/hoodie-power.jpg", "./multimedia/hoodie-power2.jpg"))

productos.push(new Prendas("id: 6", "jean boyfriend", "azul", "46", 8, 13000, "pantalones", "./multimedia/jean-boyfriend2.jpg", "./multimedia/jean-boyfriend.jpg"))

productos.push(new Prendas("id: 7", "camisa bow", "blanco", "s", 12, 12000, "camisas", "./multimedia/camisa-bow.jpg", "./multimedia/camisa-bow2.jpg"))

productos.push(new Prendas("id: 8", "remera otis", "rosa", "l", 10, 7000, "remeras", "./multimedia/remera-otis.jpg", "./multimedia/remera-otis2.jpg"))


