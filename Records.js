class disco {
    constructor(id, titulo, año, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.año = año,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El titulo es ${this.titulo}, el año es ${this.año} y su precio es ${this.precio}`)
    }
}

const disco1 = new disco (1, "El Tesoro de los Inocentes", "2004", 5000, "tapatesoro.jpg")
const disco2 = new disco (2, "Porco Rex", "2007", 9500, "tapaporco.jpg")
const disco3 = new disco (3, "El perfume de la Tempestad", "2010", 11500, "tapaperfume.jpg")
const disco4 = new disco (4, "Pajaritos, Bravos Muchachitos", "2013", 4600, "tapapajaritos.jpg")
const disco5 = new disco (5, "El Ruiseñor, El Amor y la Muerte", "2018", 7500, "taparuiseñor.jpg")


let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(disco1, disco2, disco3, disco4, disco5)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}