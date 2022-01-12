alert("¿En que estacion del año estamos?");
let mes = prompt("¡Que mes del año es hoy?").toLowerCase();
	switch(mes){
		case"enero": 
		alert("estamos en Verano, mucho calor") 
		break;
		case"febrero": 
		alert("estamos en Verano, ya casi terminamos") 
		break;
		case"marzo": 
		alert("terminando el Verano, se va el calor") 
		break;
		case"abril": 
		alert("entrando en Otoño, se fue el calor") 
		break;
		case"mayo": 
		alert("estamos en Otoño, bajando la temperatura") 
		break;
		case"junio": 
		alert("terminando el Otoño, se cayeron todas las hojas") 
		break;
		case"julio": 
		alert("estamos en invierno, mucho frio") 
		break;
		case"agosto": 
		alert("estamos en invierno, ya casi terminamos") 
		break;
		case"septiembre": 
		alert("terminando el invierno, se va el frio") 
		break;
		case"octubre": 
		alert("entrando en primavera, esta lindo") 
		break;
		case"noviembre": 
		alert("estamos en primavera, subiendo la temperatura") 
		break;
		case"diciembre": 
		alert("terminando la primavera, se viene de nuevo el calor") 
		break;
		default:
		alert("Disculpa ese mes no existe") 
		break;
	}
