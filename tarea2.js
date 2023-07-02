
alert("Hola a Todos")
document.write("Hello World")
let n1=3
let n2=5
console.log(n1+n2)
let nombreUsuario = prompt("Escriba el nombre del usuario");
alert("Hola" + " " + nombreUsuario);

let numeroPedido1 = parseFloat(prompt("Escriba un número"));
let numeroPedido2 = parseFloat(prompt("Escriba un número"));
alert(numeroPedido1 + numeroPedido2);

let numero1 = parseFloat(prompt("Escriba un número"));
let numero2= parseFloat(prompt("Escriba un número"));
alert(Math.max(numero1,numero2));

let numero11 = parseFloat(prompt("Escriba un número"));
let numero22= parseFloat(prompt("Escriba un número"));
let numero33= parseFloat(prompt("Escriba un número"));
alert("El numero más grande es" +" " + Math.max(numero11,numero22,numero33));

let numeroUsuario = parseInt(prompt("Ingrese un número entero"));

let numeroIngresado = parseInt(prompt("Ingrese un número entero"));

if (isNaN(numeroIngresado)) {
  console.warn(`El valor ${numeroIngresado} no es un número`);
} else {
  if (numeroIngresado % 2 == 0) {
    console.log(`El número ${numeroIngresado} es par 🤩`);
  } else {
    console.log(`El número ${numeroIngresado} NO es par 😭`);
  }
}

let numeroIngresadodiv = parseInt(prompt("Ingrese un numero Entero"))

if (isNaN(numeroIngresadodiv)) {
  console.warn(`El valor ${numeroIngresadodiv} no es un número`);
} 
else if (numeroIngresadodiv % 2 == 0) {
    console.log(`El número ${numeroIngresadodiv} es divisble por 2 🤩`);} 

  else if (numeroIngresadodiv % 3 == 0) {
    console.log(`El número ${numeroIngresadodiv} es divisble por 3 🤩`);}
    
  else if (numeroIngresadodiv % 5 == 0) {
    console.log(`El número ${numeroIngresadodiv} es divisble por 5 🤩`);}
  

  let numeroIngresadodiv2 = parseInt(prompt("Ingrese un numero Entero para saber todos sus divisores"))

    if (isNaN(numeroIngresadodiv)) {
      console.warn(`El valor ${numeroIngresadodiv2} no es un número`);
    } 
    else if (numeroIngresadodiv2 % 2 == 0 && numeroIngresadodiv2 % 3 == 0 && numeroIngresadodiv % 5 == 0 ) {
      console.log(`El número ${numeroIngresadodiv2} es divisble por 2 , 3 y 5`);}

    else if (numeroIngresadodiv2 % 2 == 0 && numeroIngresadodiv2 % 3 == 0 ) {
          console.log(`El número ${numeroIngresadodiv2} es divisble por 2 y 3`);}
          
    else if (numeroIngresadodiv2 % 2 == 0 && numeroIngresadodiv2 % 5 == 0 ) { 
      console.log(`El número ${numeroIngresadodiv2} es divisble por 2 y 5`);} 


    else if (numeroIngresadodiv2 % 2 == 0) { 
      console.log(`El número ${numeroIngresadodiv2} es divisble por 2 🤩`);} 
      
    else if (numeroIngresadodiv2 % 3 == 0 && numeroIngresadodiv2 % 5 == 0 ) {
        console.log(`El número ${numeroIngresadodiv2} es divisble por 3 y 5 🤩`);}
    else if (numeroIngresadodiv2 % 3 == 0) {
        console.log(`El número ${numeroIngresadodiv2} es divisble por 3 🤩`);}
    
    else if (numeroIngresadodiv2 % 5 == 0) {
        console.log(`El número ${numeroIngresadodiv} es divisble por 5 🤩`);}
      