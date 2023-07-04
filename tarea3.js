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
        break;
    case credito <2:
        console.log('Usted puede acceder a la sala Arcade unicamente')
        break;
    
        case credito <3:
        console.log('Usted puede acceder a la sala Arcade y Consolas')
        break;  

     case credito <4:
        console.log('Usted puede acceder a la sala Arcade, Rol y Consolas')
        break;

    case credito >=4:
    console.log('Usted puede acceder a todas las consolas')
    break;

    default:
        console.warn('El valor ingresado no es correcto');
    break;
    }