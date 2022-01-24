let nombre = prompt("¿Como te llamas?")
alert("Bievenido " + nombre + " tenemos productos nuevos para ti");

alert("tenemos remeras, pantalones y medias");
alert("solo puedes elegir dos productos")

function Ropa (tipo, cantidad){
	this.tipo = tipo;
	this.cantidad = cantidad;
	this.quiero = function(){console.log ("quiero "+ this.cantidad + " " + this.tipo)}
	return(tipo)
	return(cantidad)
}

let producto1 = new Ropa (prompt("que producto quieres?").toLowerCase(), prompt("¿cuantas?"));
let producto2 = new Ropa (prompt("que producto quieres?").toLowerCase(), prompt("¿cuantas?"));

console.log(producto1);
console.log(producto2);

producto1.quiero();
producto2.quiero();

const reme = 900;
const pant = 1000;
const medi = 500;


// function total(){
// 	while (producto1) {

// 		switch(producto1){
// 		case"remera":
// 		alert("tu compra es de $900") 
// 		break;
// 		case"medias":
// 		alert("tu compra es de $500")
// 		break; 
// 		default:
// 		alert("Disculpa ese producto no lo tenemos") 
// 		break;
// 		}
// 	}
// } 
// total();

let descuento = prompt("eres miembro de nuestra tienda?").toLowerCase();

if (descuento =="si"){
 	alert( nombre + " tienes un descuento de 25%")
 } else{alert(nombre + " no tenemos descuento para ti")}

 function precio(tipo = "remera"){
 	let total = reme * cantidad

 }
precio();