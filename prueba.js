let dni = parseFloat(prompt("Ingrese su documento de identidad"));
let letra=(dni%23)

switch (true) {
  case letra == 23:
    console.log("A usted le corresponde la letra T");
    break;
    case letra >= 22:
    console.log("A usted le corresponde la letra R");
    break;
    case letra >= 21:
    console.log("A usted le corresponde la letra W");
    break;
    case letra >= 20:
    console.log("A usted le corresponde la letra G");
    break;
    case letra >= 19:
    console.log("A usted le corresponde la letra H");
    break;
    case letra >= 18:
    console.log("A usted le corresponde la letra I");
    break;
    case letra >= 17:
    console.log("A usted le corresponde la letra J");
    break;
    case letra >= 16:
    console.log("A usted le corresponde la letra H");
    break;
    case letra >= 15:
    console.log("A usted le corresponde la letra I");
    break;
    case letra >= 14:
    console.log("A usted le corresponde la letra L");
    break;
    case letra >= 13:
    console.log("A usted le corresponde la letra M");
    break;
    case letra >= 12:
    console.log("A usted le corresponde la letra N");
    break;
    case letra >= 11:
    console.log("A usted le corresponde la letra O");
    break;
    case letra >= 10:
    console.log("A usted le corresponde la letra P");
    break;
    case letra >= 9:
    console.log("A usted le corresponde la letra Q");
    break;
    case letra >= 8:
    console.log("A usted le corresponde la letra A");
    break;
    case letra >= 7:
    console.log("A usted le corresponde la letra B");
    break;
    case letra >= 6:
     console.log("A usted le corresponde la letra C");
    break;
    case letra >= 5:
      console.log("A usted le corresponde la letra D");
    break;
    case letra >= 4:
    console.log("A usted le corresponde la letra E");
    break;

    case letra >= 3:
    console.log("A usted le corresponde la letra F");
    break;
    case letra >= 2:
    console.log("A usted le corresponde la letra U");
    break;
    case letra >= 1:
    console.log("A usted le corresponde la letra Z");
    break;
     case letra == 0:
     console.log("A usted le corresponde la letra Y");
     break;

 
  default:
    alert("El dato ingresado no es válido");
    break;
}