
// Tarea 1
// ------------
// 1 - ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la última letra del apellido

let apellido = "tejedor"
console.log("El apellido tiene " + apellido.length + " Caracteres");
console.log(apellido.length)
console.log(apellido.substring(6, 7));

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
// 1 - Pasarla a mayuscula
// 2 - Capitalizar la palabra (Marmota)

let animal = "marmota"
console.log(animal.toUpperCase())
console.log(animal[0].toUpperCase(1) + animal.substring(1))

//Math

let decimal = 34.78963333444

//Como redondear numeros

//numero mas bajo sin tener en cuenta el decimal
console.log(Math.floor(decimal));

//numero mas alto sin tomar en cuenta el decimal
console.log(Math.ceil(decimal));

//redondea segun el valor despues de la coma
console.log(Math.round(decimal));

let numberString= "68.333"

let numeroEntero= parseInt(numberString)

console.log(numeroEntero);

let numeroFlotante = parseFloat(numberString)

console.log(numeroFlotante);

//Esto sirve para convertir el string en numero con decimal

//numero con dos decimales
console.log(Math.round(numeroFlotante* 100) /100);
console.log(Math.round(numeroFlotante));

console.log(numeroFlotante.toFixed(2)); 
//la unica macana es que esto lo devuelve como tipo string, por lo que despues se debe convertir el resultado en un valor flotante.

console.log(parseFloat(numeroFlotante));

console.log(parseFloat(numeroFlotante.toFixed(2)));
//esta es la forma más común

//elevar un numero a una potencia (al cuadrado, cubo)

let numeroBase = numeroEntero
let exponente= 3

console.log(Math.pow(numeroBase,exponente));

//Raiz cuadrada

console.log(Math.sqrt(numeroBase));

//obtener valores aleatorios
Math.ceil(Math.random()*10);

console.log(Math.ceil(Math.random()*10))