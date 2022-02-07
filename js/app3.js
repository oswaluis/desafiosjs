let username = document.getElementById('titleContacto');
console.log(username.innerHTML)

username.innerText = "Usuario"
console.log(username.innerText)


let enviar = document.getElementById("enviar")
	enviar.addEventListener("click", mensaje)
	function mensaje (){
	let nombre = document.getElementById("nombre").value;
	let email = document.getElementById("email").value;
	let mostrar = document.getElementById("mensaje")

	mostrar.innerHTML = 

	`
	Gracias  ${nombre}, nos pondremos
	en contacto

	`


	}
