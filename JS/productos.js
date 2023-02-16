const productos = []; //Array que contiene los objetos (las prendas)

class Prendas { //Clase constructora con la cual arme los objetos
    constructor(id, nombre, color, talle, cantidad, precio) {
        this.id = id
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

productos.push(new Prendas("id: 1", "Buzo Anorak", "Verde Lima", "XL", 10, 10000))
productos.push(new Prendas("id: 2", "Jogger Washed", "Negro", "48", 5, 12000))
productos.push(new Prendas("id: 3", "Camisa Firenze", "Blanco", "M", 7, 9000))
productos.push(new Prendas("id: 4", "Remera Roma", "Blanco", "S", 10, 6000))
productos.push(new Prendas("id: 5", "Buzo Capa", "Rosa", "S", 10, 11000))
productos.push(new Prendas("id: 6", "Jean Boyfriend", "Azul", "42", 8, 13000))
productos.push(new Prendas("id: 7", "Camisa Bow", "Blanco", "M", 12, 12000))
productos.push(new Prendas("id: 8", "Remera Nudos", "Negro", "S", 10, 7000))
