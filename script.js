alert("CONSULTA DE MODIFICACIONES EN CONTRATO DE ALQUILER");

let continuar_o_finalizar = prompt("Pulsa 1 para continuar o 2 para finalizar");


let corroborar_valores;

if (continuar_o_finalizar != 2) {
    corroborar_valores = prompt("Tu contrato comenzo hace menos de 12 meses. Responde SI o NO ");
}

else if (corroborar_valores == "NO") {

    alert("Corresponde pagar el valor inicial sumado al 50 % de dicho monto");
}

  else if(corroborar_valores = "SI") {

        alert("El valor inicial no sufre modificaciones");
    }



let calcular_o_finalizar = prompt("Pulsa 1 para calcular el valor o 2 para finalizar");


if (calcular_o_finalizar == "1") {

    monto_inicial = prompt("Ingresa valor inicial del contrato")
    

}
else if (calcular_o_finalizar== "2") {

    alert("MUCHAS GRACIAS");

}


let calcular_valor;

if (continuar_o_finalizar != "2") {
    contratar_servicio = prompt("Ingresa antiguedad del contrato en años");
}


while (calcular_valor != "SALIR") {


    if (calcular_valor == 1) {
        alert("El aumento es de un 50% al año");
        console.log("El numero de telefono registrado es ", contacto);
    }
    
    else if (continuar_o_finalizar != "2") {
        contratar_servicio = prompt("Para volver al inicio presione salir")
    }
    break
}


