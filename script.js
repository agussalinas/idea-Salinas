class Discos {
    constructor(nombre, interprete, cantidad) {
        this.nombre = nombre;
        this.interprete = interprete;
        this.cantidad = cantidad;
    }
}

let arrayDisco = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.disco[1].value;
let interpreteI = formulario.disco[3].value;
let cantidadI = formulario.disco[5].value;

let contenedor = document.querySelector("#discoIngresado")
let displayTodos = document.querySelector("#displatTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarDiscos);
btnMostrar.addEventListener('click', MostrarTodosLosDiscos);

inputNombre.focus();

function validarForm() {
    nombreI = formulario.disco[1].value;
    interpreteI = formulario.disco[3].value;
    cantidadI = formulario.disco[5].value;
    console.log(nombreI);
    console.log(interpreteI);
    console.log(cantidadI);
    if (nombreI =='' || interpreteI == '' || cantidadI == '') {
        alert('ERROR - Debe completar todos los campos para continuar');
        inputNombre.focus();
        bandera = false;
    }else{
        bandera = true;
    }
    }
    function agregarDiscos(e) {
        e.preventDefault();
        validarForm();
        if (bandera == true) {
            let opcion = confirm("Esta seguro de agregar el nombre del disco");
            if (opcion == true) {
                let formulario = e.target
                arrayDisco.push(new Disco(nombreI, interpreteI, cantidadI)) ;
            }else{
                alert('No se agrega el usuario')
            }
            formulario.disco[1].value ='';
            formulario.disco[3].value ='';
            formulario.disco[5].value ='';
            contenedor.innerHTML = '';
            AgregaralDOM();
            inputNombre.focus();
        }else{
            inputNombre.focus();

        }
            
    }

    function AgregaralDOM() {
        contenedor.innerHTML = `<h3> Ultimo disco Ingresado:</h3>
        <p><strong> Nombre: </strong> ${nombreI}</p>
        <p><strong> Interprete: </strong> ${interpreteI}</p>
        <p><strong> Cantidad: </strong> ${cantidadI}</p>
        <hr>`;

    function MostrarTodosLosDiscos(e) {
        e.preventDefault();
        let i = 0;
        displayTodos.innerHTML = '<h3> Listado de todos los discos:</h3>';
        for (const disco of arrayDisco) {
            dispklayTodos.innerHTML += `
            <p><strong> Nombre: </strong> ${nombreI}</p>
            <p><strong> Interprete: </strong> ${interpreteI}</p>
            <p><strong> Cantidad: </strong> ${cantidadI}</p>
            <hr>`;
        }
    
    }



    }
        
    


