/*Escribe un programa que pida una frase, 
devuelva la cantidad de vocales que tiene la frase y 
muestre en consola cuales son*/

let frase= prompt ("Ingrese una frase cualquiera")
frase=frase.toLowerCase()
let mostrar= ""

let vocales = ["a","e","i","o","u"]
let vocalesEncontradas = []

for (let index = 0; index < frase.length; index++) {
    let letra= frase[index]
    if (vocales.includes(letra)) {
        vocalesEncontradas.push(letra)
    }
}

mostrar=vocalesEncontradas.join("")
alert(mostrar)