let nombre = prompt("¿Como te llamas?")
alert("Bievenido " + nombre + " tenemos productos nuevos para ti");

alert("tenemos remeras, pantalones y medias");
alert("solo puedes elegir dos productos")

function Ropa (tipo, cantidad){
	this.tipo = tipo;
	this.cantidad = cantidad;
	this.quiero = function(){console.log ("quiero "+ this.cantidad + " " + this.tipo)}
	
}

let tipoR= prompt("que producto quieres?").toLowerCase()
let cantidadR = Number(prompt("¿cuantas?"))
let tipoR2 = prompt("que producto quieres?").toLowerCase()
let cantidadR2 = Number(prompt("¿cuantas?"))

let producto1 = new Ropa (tipoR,cantidadR);
let producto2 = new Ropa (tipoR2, cantidadR2);

console.log(producto1);
console.log(producto2);

producto1.quiero();
producto2.quiero();

const reme = 900;
const pant = 1000;
const medi = 500;

let totalP1 = 0
let totalP2 = 0

switch (producto1.tipo) {
	case "remera":
		 totalP1 += reme
		 break;

	case "remeras":
		 totalP1 += reme
		 break;

	case "pantalones":
		 totalP1 += pant
		 break;		
		  
	case "pantalon":
		 totalP1 += pant
		 break;

	case "medias":
		 totalP1 += medi
		 break;

	default:
		break;
}
switch (producto2.tipo) {
	case "remera":
		 totalP2 += reme
		 break;

	case "remeras":
		 totalP2 += reme
		 break;

	case "pantalones":
		 totalP2 += pant
		 break;		
		  
	case "pantalon":
		 totalP2 += pant
		 break;

	case "medias":
		 totalP2 += medi
		 break;

	default:
		break;
}


console.log(totalP1, cantidadR)

alert('subtotal del primer producto es '+ precioP1());

console.log(totalP2, cantidadR2)

alert('subtotal del segundo producto es '+ precioP2());



let totalDef = totalP1 + totalP2
alert("tu Subtotal es de " + totalDef)




let descuento = prompt("eres miembro de nuestra tienda?").toLowerCase();


if (descuento =="si"){
 	alert(" tienes un descuento de 25%")
	descuentoCal()

 } else{
	 alert(" no tenemos descuento para ti")
	 alert('Gracias por su compra, su total es '+ subtotal());
	}


function descuentoCal(){
	console.log(totalDef)
	console.log(totalDef - (totalDef * 0.25))
	alert('su total con descuento es ' + (totalDef - (totalDef * 0.25)))
}


 function precioP1(){


	totalP1 = totalP1 * cantidadR
		console.log(totalP1)
	return totalP1

 }

 function precioP2(){

	totalP2 = totalP2 * cantidadR2
	
		console.log(totalP2)
	return totalP2

 }

function subtotal(){
	subtotal = totalP2 + totalP1
	return subtotal
}