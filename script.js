class Discos {
    constructor(nombre, precio, interprete, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.interprete = interprete;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    sumarIva() {
        return this.precio * 1.21;
    } 

    Vender() {
        this.disponible = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }  

}

var arrayDiscos = [];
do{
    var comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin" ){
        break;    
    } else {
        nombreD = comprobacion;
        var precioD = propmt('Ingrese el precio del producto');
        var interpreteD = prompt('Ingrese el detalle del producto');
        var cantidadD = prompt('Ingrese la cantidad comprada del producto');
        arrayDiscos.push(new Discos(nombreD, precioD, interpreteD, cantidadD));
    }
}
while (comprobacion !="fin" || comprobacion != "FIN" || comprobacion != "Fin")


console.log(arrayDiscos);


for (let producto of arrayDiscos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML =  `<h3> Nombre: ${discos.nombre}</h3>
                            <p> Precio $: ${discos.precio}</p>
                            <p> Cantidad: ${discos.cantidad}</p>
                            <p> Detalle: ${discos.detalle}</p> `;
document.body.appendChild(contenedor);
}

var pocoStock = arrayDiscos.filter(Discos => discos.cantidad <= 3 );
document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>");
for (let Discos of pocoStock) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML =  `<h3> Nombre: ${discos.nombre}</h3>
                            <p> Precio $: ${discos.precio}</p>
                            <p> Cantidad: ${discos.cantidad}</p>
                            <p> Detalle: ${discos.detalle}</p> `;
Document.body.appendChild(contenedor);
}

var pocoStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Discos sin Stock (cantidad = 0 o disponible = false): </h3>");

for (let Discos of sinStock) {
    document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>");
    let contenedor = document.createElement("div");
    contenedor.innerHTML =  `<h3> Nombre: ${discos.nombre}</h3>
                             <p> Precio $: ${discos.precio}</p>
                             <p> Cantidad: ${discos.cantidad}</p>
                             <p> Detalle: ${discos.detalle}</p> `;
Document.body.appendChild(contenedor);
}
