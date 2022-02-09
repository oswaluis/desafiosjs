let carritoDeCompras = []
const contenedorProductos = document.getElementById("stockProductos")
const seleccionTalles = document.getElementById("seleccionTalles")
const contadorCarrito = document.getElementById("contadorCarrito")
const carrito = document.getElementById("carrito-contenedor")
const precioTotal = document.getElementById("precioTotal")
const buscador = document.getElementById("buscador")



seleccionTalles.addEventListener("change", ()=> {console.log(seleccionTalles.value)
	 	if (seleccionTalles.value == "all") {
	 		mostrarStock(stock)
	 	}else{
	 		console.log(stock.filter(el => el.tipo == seleccionTalles.value))
	 		mostrarStock(stock.filter(el => el.tipo == seleccionTalles.value))
	 	}}
	)


mostrarStock(stock)
	
	function mostrarStock(array){
		contenedorProductos.innerHTML="";
		array.forEach(producto =>{
			let div = document.createElement("div")
			div.className = "producto"
			div.innerHTML = `
			    		<div class="col-md-6 col-lg-4 col-xxl-3 text-center ">
      						<img class="imgBorder borde-azul radio-25 h-75 col" src="${producto.img}">
      						<h3 class="fs-3 text-uppercase fw-bold  ">${producto.nombre}</h3>
      						<a id="botonCarr${producto.id}" class="fw-bold btn btn-primary btn-sm px-3"><i class="fas fa-cart-plus me-3"></i>$${producto.precio}</a>
    					</div>
			`
			stockProductos.appendChild(div)

			let btnCarrito = document.getElementById(`botonCarr${producto.id}`)
			// console.log(btnCarrito)
			btnCarrito.addEventListener("click",()=>{
				agregarCarrito(producto.id)
			})


		})
	}


function agregarCarrito(id){
	let productoAgg = stock.find(elemento => elemento.id == id)
	console.log(productoAgg)
	carritoDeCompras.push(productoAgg)
	actCarrito()
	let div = document.createElement("div")
	div.className = "productosCarrito d-flex flex-row px-2"
	div.innerHTML = `  

        <p>${productoAgg.nombre}</p>
        <p>Precio: $${productoAgg.precio}</p>
        <p id= cantidad${productoAgg.id}>Cantidad: ${productoAgg.cantidad}</p>
        <button class="color1 boton-eliminar"><i class="fas fa-trash"></i></button>


	 `

		carrito.appendChild(div)
}

function actCarrito(){
	contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad, 0)
	precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc +(el.precio * el.cantidad),0)
}