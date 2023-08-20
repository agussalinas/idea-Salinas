let productosEnCarrito = []

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function getdisco() {
    return fetch('./data.json').then(response => response.json())
}

function buscarInfo(buscado, array) {
    let busqueda = array.filter(
        disco => disco.titulo.toLowerCase().includes(buscado.toLowerCase()) ||
        disco.año.toLowerCase().includes(buscado.toLowerCase())
    );

    if (busqueda.length == 0) {
        coincidencia.innerHTML = "";
        let nuevoDiv = document.createElement("div");
        nuevoDiv.innerHTML = `<p> No hay coincidencias</p>`;
        coincidencia.appendChild(nuevoDiv);
        mostrarCatalogo(array);
    } else {
        coincidencia.innerHTML = "";
        mostrarCatalogo(busqueda);
    }
}

function ordenarMayorMenor(array) {
    let mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => (b.precio - a.precio))
    mostrarCatalogo(mayorMenor)
}

function ordenarMenorMayor(array) {
    let menorMayor = [].concat(array)
    menorMayor.sort((a, b) => (a.precio - b.precio))
    mostrarCatalogo(menorMayor)
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array)
    alfabeticamente.sort((a, b) => {
     
        return 0;
    })
    mostrarCatalogo(alfabeticamente)
}

let divProductos = document.getElementById("productos")
let btnGuardarLibro = document.getElementById("guardarproductoBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verCatalogo")
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")

function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const disco of array) {
        let nuevoLibro = document.createElement("div")
        nuevoLibro.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        nuevoLibro.innerHTML = `<div id="${libro.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="images/${disco.imagen}" alt="${disco.titulo} de ${libro.año}">
        <div class="card-body">
            <h4 class="card-title">${disco.titulo}</h4>
            <p>Autor: ${disco.año}</p>
            <p class="">Precio: ${disco.precio}</p>
        <button id="agregarBtn${disco.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        divProductos.appendChild(nuevoLibro)
        let btnAgregar = document.getElementById(`agregarBtn${disco.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(libro)
        })
    }
}

function agregarAlCarrito(libro) {
    productosEnCarrito.push(libro)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
      <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
      <div class="card-body">
              <h4 class="card-title">${productoCarrito.titulo}</h4>
          
              <p class="card-text">$${productoCarrito.precio}</p> 
              <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
      </div>    
  </div>
`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            productosEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))


        })

    });

}

function cargardisco(array) {
    let inputTitulo = document.getElementById("tituloInput")
    let inputPrecio = document.getElementById("precioInput")

    let discoCreado = new disco(array.length + 1, inputAutor.value, inputTitulo.value, parseInt(inputPrecio.value), "libroNuevo.jpg")
    array.push(libroCreado)
    localStorage.setItem("estanteria", JSON.stringify(array))
    mostrarCatalogo(array)
    inputTitulo.value = ""
    inputPrecio.value = ""
}

btnGuardardisco.addEventListener("click", () => {
    cargarLibro(estanteria)
})

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, estanteria)
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        ordenarMayorMenor(estanteria)
    }

    else if (selectOrden.value == 2) {
        ordenarMenorMayor(estanteria)
    }

    else if (selectOrden.value == 3) {
        ordenarAlfabeticamente(estanteria)
    }
    else {
        mostrarCatalogo(estanteria)
    }
})

getdisco().then(discos => {
    mostrarCatalogo(discos);
   
});