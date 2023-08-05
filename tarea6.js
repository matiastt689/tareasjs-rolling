/*Funciones
Dificultad:  🟢
4- Escribir el código de una función a la que se pasa como parámetro un 
número entero y devuelve como resultado una cadena de texto que indica si 
el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/


const parImpar= function (numero) {
if(numero%2==0){
console.log (`El numero ${numero} es par`);
}
else {console.log (`el numero ${numero} es impar`); }

}


/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.*/

const capitalizacion = function (texto){
    let mayuscula=false
    let minuscula=false
    
    let textoSinEspacios = texto.split(" ").join("");

    for (let i = 0; i < textoSinEspacios.length; i++) {
        if (textoSinEspacios[i] == textoSinEspacios[i].toUpperCase()){mayuscula = true}
        if (textoSinEspacios[i] == textoSinEspacios[i].toLowerCase()) {minuscula = true; }

    }

    if (mayuscula == true && minuscula == true){
        console.log(`el texto contiene mayusculas y minisculas`)
        }
        else if(mayuscula){
        console.log(`el texto solo contiene mayusculas`)}
        else if(minuscula){
        console.log(`el texto solo contiene minusculas`)
        }
        }


        // const definirTipo = function (frase) {
//   if (!isNaN(frase)) {
//     console.log(`Lo sentimos ${frase} no es válido.`);
//     return;
//   }
//   if (frase === frase.toUpperCase()) {
//     console.log(`La frase ${frase} está formada por mayúculas.`);
//   } else if (frase === frase.toLowerCase()) {
//     console.log(`La frase ${frase} está formada por minúsculas.`);
//   } else {
//     console.log(`La frase ${frase} está formada por mayúsculas y minúsculas.`);
//   }
// };



/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

const calcularPerimetro= function (a,b){
    document.write (`El perimetro del rectangulo es de ${2*(a + b)} cm`)
}


/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
del número elegido por el usuario.
*/

let valor=prompt("Ingrese el valor que desea calcular")
const tablaMultiplicar= function (valor,tabla){

document.write("<h3>Tabla de Multiplicar</h3>")

while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);
    document.write(`${tabla} x ${valor} = ${tabla * valor}<br>`);

    valor++;
  }

}