
alert("CONSULTA DE MODIFICACIONES EN CONTRATO DE ALQUILER");

let continuar_o_finalizar = prompt("Pulsa 1 para continuar o 2 para finalizar");


const periodo = [{ anio:1, coeficiente: "50%"},{ anio:2, coeficiente: "100%"},{ anio:3, coeficiente: "150%"},{ anio:4, coeficiente: "200%"},];
for (coeficiente of periodo) {
    console.log(coeficiente.anio);
    console.log(coeficiente.coeficiente);
}



if (continuar_o_finalizar != 2) {
    continuar_o_finalizar = prompt("Tu contrato comenzo hace menos de 12 meses. Responde SI o NO ");
  
} else (continuar_o_finalizar == "2") ;{

    alert("MUCHAS GRACIAS");
    

}


let corroborar_valores; 

if (corroborar_valores == "NO") {

    alert("Corresponde pagar el valor inicial sumado al 100 % de dicho monto");
} else (corroborar_valores == "SI"); {

    alert("El valor inicial no sufre modificaciones");
    }



let calcular_o_finalizar = prompt("Pulsa 1 para calcular el valor o 2 para finalizar");


if (calcular_o_finalizar == "1") {

    monto_inicial = parseInt(prompt("Ingresa valor inicial del contrato"))
    

} else (calcular_o_finalizar== "2") ;{

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

 



