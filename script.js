//Anuncio inicial
alert("CONSULTA DE MODIFICACIONES EN CONTRATO DE ALQUILER");

//definimos los pasos a seguir
let continuar_o_finalizar = prompt("Pulsa 1 para continuar o 2 para finalizar");


let corroborar_valores; //se ingresa la opcion para iniciar o cancelar


const periodo = [1,2,3,4];


// se calcula a partir del 1 año de contrato, antes del año no hay aumento
if (continuar_o_finalizar != 2) {
    corroborar_valores = prompt("Tu contrato comenzo hace menos de 12 meses. Responde SI o NO ");
  
}



 else if (continuar_o_finalizar == "2") {

    alert("MUCHAS GRACIAS");
    

}


else if (corroborar_valores == "NO") {

    alert("Corresponde pagar el valor inicial sumado al 50 % de dicho monto");
}

   else if(corroborar_valores =! "SI") {

    alert("El valor inicial no sufre modificaciones");
    }



let calcular_o_finalizar = prompt("Pulsa 1 para calcular el valor o 2 para finalizar");


if (calcular_o_finalizar == "1") {

    monto_inicial = parseInt(prompt("Ingresa valor inicial del contrato"))
    

}
else if (calcular_o_finalizar== "2") {

    alert("MUCHAS GRACIAS");

}


let calcular_valor;

if (continuar_o_finalizar != "2") {
    contratar_servicio = parseInt(prompt("Ingresa antiguedad del contrato en años"));
    let resultado = monto_inicial * contratar_servicio;
    alert(resultado);
}

while (calcular_valor != "CANCELAR") {

     if (calcular_valor == periodo [0]) {
     alert("El valor inicial no sufre modificaciones");
    console.log(monto_inicial * periodo[0], resultado);
     }
     
     else if (calcular_valor == periodo [1]) {
        alert("el valor inicial aumenta un 100%");
       console.log(monto_inicial * periodo[1], resultado);
        }

        else if (calcular_valor == periodo [2]) {
            alert("el valor inicial aumenta un 200%");
           console.log(monto_inicial * periodo[4], resultado);
            }

            else if (calcular_valor == periodo [3]) {
                alert("el valor inicial aumenta un 300%");
               console.log(monto_inicial * periodo[3], resultado);
                }
     
    }
    



