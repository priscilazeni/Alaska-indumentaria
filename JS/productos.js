const productos = []; //Array que contiene los objetos (las prendas)

class Prendas { //Clase constructora con la cual arme los objetos
    constructor(id, nombre, color, talle, cantidad, precio, categoria, img, img2, ruta, info) {
        this.id = id
        this.nombre = nombre;
        this.color = color;
        this.talle = talle; 
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.img = img;
        this.img2 = img2;
        this.ruta = ruta;
        this.info = info;
    }
}

productos.push(new Prendas("id: 1", "buzo buda", "blanco", "xl", 10, 10000, "buzos", "./multimedia/buzo-buda.jpg", "./multimedia/buzo-buda2.jpg", 'buzoBuda.html', "Buzo hoodie confeccionado en tejido rústico de algodón estampado. Fit oversized, con capucha y cordón que permite regular su calce. Posee estampa buda, un clásico JCH. De largo irregular, siendo el frente más corto que el delantero. Composición: 70% algodón, 30% poliester."))

productos.push(new Prendas("id: 2", "jogger washed", "celeste", "48", 5, 12000, "pantalones", "./multimedia/jogger-washed.jpg", "./multimedia/jogger-washed2.jpg", "joggerWashed.html", "Pantalón jogging confeccionado 100% en algodón rústico estampado. Se ingresa por cintura con cordón para regular. Termina con puños en el tobillo. Composición: 90% algodón, 10% poliester."))

productos.push(new Prendas("id: 3", "camisa firenze", "amarillo", "m", 7, 9000, "camisas", "./multimedia/camisa-firenze.jpg", "./multimedia/camisa-firenze2.jpg", "camisaFirenze.html", "Camisa confeccionada 100% en algodón y diversas combinaciones de textiles. Posee tabla encontrada en la espalda, tajos laterales y lazo a la cintura.<br>Composición: Tela base: 100% viscosa. Tela Complemento: 100% viscosa."))

productos.push(new Prendas("id: 4", "remera roma", "blanco", "s", 10, 6000, "remeras", "./multimedia/remera-roma.jpg", "./multimedia/remera-roma2.jpg", "remeraRoma.html", "Remera confeccionada en jersey de algodón pima con estampa delantera con detalles de flock y bordado artesanal. Fit clásico con escote redondo y mangas cortas. Posee en los laterales tajos que otorgan comodidad. Composición: 100% algodon pima."))

productos.push(new Prendas("id: 5", "hoodie power", "negro", "s", 10, 11000, "buzos", "./multimedia/hoodie-power.jpg", "./multimedia/hoodie-power2.jpg", "hoodiePower.html", "Hoodie tejido en jacquard con dibujo Benoit exclusivo de esta colección. Fit holgado, con sisa caída, mangas largas y capucha, largo por debajo de la cadera. Composición: 70% viscosa, 30% poliamida."))

productos.push(new Prendas("id: 6", "jean boyfriend", "azul", "42", 8, 13000, "pantalones", "./multimedia/jean-boyfriend2.jpg", "./multimedia/jean-boyfriend.jpg", "jeanBoyfriend.html", "Jeans boyfriend confeccionado en algodón liviano. De calce clásico y relajado tipo oversize a la cadera, posee ruedo doblado en la botamanga que llega por encima de los tobillos. De color azul medio y bigotes sutiles. En el lateral de una de las piernas tiene una serie de tres bordados de bocas con lurex. Composición: 83% algodón, 15% poliéster, 2% elastano."))

productos.push(new Prendas("id: 7", "camisa bow", "blanco", "m", 12, 12000, "camisas", "./multimedia/camisa-bow.jpg", "./multimedia/camisa-bow2.jpg", "camisaBow.html", "Camisa confeccionada en 100% seda estampada con moños exclusivo de esta temporada. Posee cartera oculta, puños abotonados y tabla en la espalda para dar amplitud.Composición: Tela base: 100% seda.<br>Tela complemento: 96% seda, 4% eslastano."))

productos.push(new Prendas("id: 8", "remera otis", "rosa", "s", 10, 7000, "remeras", "./multimedia/remera-otis.jpg", "./multimedia/remera-otis2.jpg", "remeraOtis.html", "Top confeccionado 100% en tramado de morley en colores lisos. Fit al cuerpo, posee escote recto con hombros descubiertos y frunce en centro delantero Composición: 46% poliamida, 45% poliester, 9% elastano."))



