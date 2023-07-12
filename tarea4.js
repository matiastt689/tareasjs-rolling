//Edad solicitada

let edad = parseInt(prompt("Ingrese su edad"))

if (isNaN(edad)) {
  console.warn("El valor ingresado no es válido"); }

else{
  if (edad > 18 ){
    console.log("Usted ya puede conducir") 
} 
else{
    console.log("Siga esperando pichón")
}
}

edad= parseInt(prompt("Ingrese su edad"))
switch(true){
  case edad>= 18:
    console.log("Usted ya puede conducir y beber");
    break;
    
    default:
    console.log("Espere sentado");
    break;
}

//Solicitar nota 
//2- Escribir un programa que solicite una nota (número) de 0  a 10. 
//Luego mostrar la calificación en un alert según los siguientes rangos de nota:


let nota = parseFloat(prompt("Ingrese su calificacion"));

switch (true) {
  case nota < 2:
    alert("Muy deficiente");
    break;
  case nota <= 4:
    alert("Insuficiente");
    break;
  case nota <= 6:
    alert("Suficiente");
    break;
  case nota == 7:
    alert("Bien");
    break;
  case nota <= 9:
    alert("Notable");
    break;
  case nota == 10:
    alert("Sobresaliente");
    break;
    case nota > 10:
    alert("Número erroneo")
  default:
    alert("El numero ingresado no es válido");
    break;
}



//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let invitados=prompt("Ingreso los nombres de los invitados un por uno")

let invitadosFiesta=""

while(invitados){ 

invitadosFiesta= invitadosFiesta + "-" + invitados


invitados=prompt("Ingreso los nombres de los alumnos un por uno")

confirm("Desea agregar otro invitado?")

}
console.log(invitadosFiesta)

//4- Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numeros=parseInt(prompt("Ingreso los numeros solicitados"))

let conjuntoNumeros=""

if (isNaN(numeros)) {
    console.warn("El valor ingresado no es válido"); 

    while(numeros){ 
        conjuntoNumeros= conjuntoNumeros + numeros
        conjuntoNumeros=prompt("Ingrese los numeros")
    }
    console.log(conjuntoNumeros)
}
  


//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

let dni = parseFloat(prompt("Ingrese su documento de identidad"));
let letra=(dni%23)

switch (true) {
  case letra > 23:
    console.log("A usted le corresponde la letra T");
    break;
    case letra > 22:
    console.log("A usted le corresponde la letra R");
    break;
    case letra > 21:
    console.log("A usted le corresponde la letra W");
    break;
    case letra > 20:
    console.log("A usted le corresponde la letra G");
    break;
    case letra > 19:
    console.log("A usted le corresponde la letra H");
    break;
    case letra > 18:
    console.log("A usted le corresponde la letra I");
    break;
    case letra > 17:
    console.log("A usted le corresponde la letra J");
    break;
    case letra > 16:
    console.log("A usted le corresponde la letra H");
    break;
    case letra > 15:
    console.log("A usted le corresponde la letra I");
    break;
    case letra > 14:
    console.log("A usted le corresponde la letra L");
    break;
    case letra > 13:
    console.log("A usted le corresponde la letra M");
    break;
    case letra > 12:
    console.log("A usted le corresponde la letra N");
    break;
    case letra > 11:
    console.log("A usted le corresponde la letra O");
    break;
    case letra > 10:
    console.log("A usted le corresponde la letra P");
    break;
 
  default:
    alert("El dato ingresado no es válido");
    break;
}