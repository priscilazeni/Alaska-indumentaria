const productos = []; //Array que contiene los objetos (las prendas)

class Prendas { //Clase constructora con la cual arme los objetos
    constructor(id, nombre, color, talle, cantidad, precio, categoria) {
        this.id = id
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
    }
}

productos.push(new Prendas("id: 1", "Buzo Buda", "Blanco", "XL", 10, 10000, "Buzos"))
productos.push(new Prendas("id: 2", "Jogger Washed", "Celeste", "48", 5, 12000, "Pantalones"))
productos.push(new Prendas("id: 3", "Camisa Firenze", "Amarillo", "M", 7, 9000, "Camisas"))
productos.push(new Prendas("id: 4", "Remera Roma", "Blanco", "S", 10, 6000, "Remeras"))
productos.push(new Prendas("id: 5", "Hoodie Power", "Negro", "S", 10, 11000, "Buzos"))
productos.push(new Prendas("id: 6", "Jean Boyfriend", "Azul", "42", 8, 13000, "Pantalones"))
productos.push(new Prendas("id: 7", "Camisa Bow", "Blanco", "M", 12, 12000, "Camisas"))
productos.push(new Prendas("id: 8", "Remera Otis", "Rosa", "S", 10, 7000, "Remeras"))
