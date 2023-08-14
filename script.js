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

let nombreI = miFormulario.disco[1].value;
let interpreteI = miFormulario.disco[3].value;
let cantidadI = miFormulario.disco[5].value;

let contenedor = document.querySelector("#discoIngresado")
let displayTodos = document.querySelector("#displatTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarDiscos);
btnMostrar.addEventListener('click', MostrarTodosLosDiscos);

inputNombre.focus();

function validarForm() {
    nombreI = miFormulario.disco[1].value;
    interpreteI = miFormulario.disco[3].value;
    cantidadI = miFormulario.disco[5].value;
    console.log(nombreI);
    console.log(interpreteI);
    console.log(cantidadI);
    if (nombreI =='' || interpreteI == '' || cantidadI == '') {
        console.log('ERROR - Debe completar todos los campos para continuar');
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
                console.log('No se agrega el usuario')
            }
            miFormulario.disco[1].value ='';
            miFormulario.disco[3].value ='';
            miFormulario.disco[5].value ='';
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
            displayTodos.innerHTML += `
            <p><strong> Nombre: </strong> ${nombreI}</p>
            <p><strong> Interprete: </strong> ${interpreteI}</p>
            <p><strong> Cantidad: </strong> ${cantidadI}</p>
            <hr>`;
        }
    
    }



    }
        
    


