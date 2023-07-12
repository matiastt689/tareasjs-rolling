//En un establecimiento de juegos existen cuatro salas: 
//Arcade, Consolas, Rol, Realidad Virtual. 
//Si un usuario paga 4 créditos puede acceder
// a todas, si paga 3 solo podrá acceder a las 
// tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

let dinero=parseFloat(prompt("Ingrese la cantidad de $ que desea recargar"))
let credito= dinero*0.5

switch(true) {
    case credito < 1:
        console.log('No posee credito suficiente para acceder a ninguna Sala')
        console.log('Tu saldo disponible es de'+ credito)
        break;
    case credito <2:
        console.log('Usted puede acceder a la sala Arcade unicamente')
        console.log(("Tu saldo disponible es de" +" "+ (credito-1)))
        break;

        case credito <3:
        console.log('Usted puede acceder a la sala Arcade y Consolas')
        console.log(("Tu saldo disponible es de" +" "+ (credito-2)))
        break;  

     case credito <4:
        console.log('Usted puede acceder a la sala Arcade, Rol y Consolas')
        console.log(("Tu saldo disponible es de" +" "+ (credito-3)))
        break;

    case credito >=4:
    console.log('Usted puede acceder a todas las consolas')
    console.log(("Tu saldo disponible es de" +" "+ (credito-4)))
    break;

    default:
        console.warn('El valor ingresado no es correcto');
    break;
    }