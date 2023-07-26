const calcularAreaCuadro= function(lado) {

console.log (`El area del cuadrado es ${lado * lado} cm2`);

}

let persona= prompt ("Ingrese su nombre de usuario")
function saludarUsuario (usuario='Invitado'){
    console.log(`Hola ${usuario} Bienvenido!!`);
}

saludarUsuario (persona)

calcularDescuento(2000)

function calcularDescuento (precio, descuento=15){

    let descuentoCalculado= 100 - descuento
    let montoConDescuento = (precio*descuentoCalculado)/100
    console.log (`El importe a abonar es de ${montoConDescuento}`);
}

const cotizacionDolarHoy = function(importe=1, dolar=262){
        let calcular= importe*dolar
        console.log(`Dolar: $ ${importe} / Pesos Argentinos: $ ${calcular}`)
};

cotizacionDolarHoy(200);
