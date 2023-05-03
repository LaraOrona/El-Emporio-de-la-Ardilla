/////////////CLASES////////////////
class Producto {
    constructor(nombre, precio, descripcion, id, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.descripcion = descripcion.toLowerCase();
        this.id = Number(id);
        this.stock = true;
        this.cantidad = Number(cantidad);

}}

class Detalle {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre.toUpperCase();
        this.cantidad = Number(cantidad);
        this.precio = parseFloat(precio);

}}

/////////////FUNCIONES///////////////////

function obtenerPrecio(producto) {

    let cantidad = parseInt(prompt("¿Cuántos " + producto.descripcion + " desea comprar?"));

    let mayorQueStock = obtenerCantidad(producto,cantidad);

    if (mayorQueStock(producto.cantidad)===true){

        const objetoDetalles = new Detalle (producto.descripcion,cantidad,producto.precio*cantidad)
        return objetoDetalles

    } else {
        let sinStock = prompt ("Nos quedan " + producto.cantidad + "¿Desea continuar con la compra? (SI o NO)")

        if(sinStock.toUpperCase()==="SI"){
        const objetoDetalles = new Detalle (producto.descripcion,cantidad,producto.precio*cantidad)
        return objetoDetalles}

        else{
            const objetoDetalles = new Detalle (producto.descripcion,0,0)
            return objetoDetalles
        }
    }

    
}
    

    function obtenerCantidad(producto, cantidadProductos) {
        const cantidadDisponible = producto.cantidad;
        if (cantidadProductos <= cantidadDisponible) {
          producto.stock = true;
          producto.cantidad -= cantidadProductos;
          return (cantidadStock) => cantidadStock > cantidadProductos;       
         } 
         else {
          producto.stock = false;
          return (cantidadStock) => cantidadStock > cantidadProductos;
        }
      }
 /////////////ARRAYS//////////////  

const catalogo = [
    new Producto ("taza",1500,"Taza ardilla negra",1,25),
    new Producto ("remera",3000,"Remera ardilla blanca",2,30),
    new Producto ("remera2",3000,"Remera ardilla negra",3,30),
    new Producto ("llavero",1000,"Llavero ardilla tela",4,50),
    new Producto ("llavero2",1000,"Llavero ardilla feliz",5,50),
    new Producto ("taza2",1500,"Taza ardilla blanca",6,25),

]

const detalleFinal = []


////////////VARIABLES////////////

let precioTotal = 0;
let texto = "Los productos elegidos son:";
    


// let productoElegido = prompt("Qué articulos desea ver?")

/////////////////////Este es un filtro que al final decidi no usar/////////////////////////////
// const filtroProductos = catalogo.filter((c)=>c.nombre.includes(productoElegido.toUpperCase()))
// alert(filtroProductos);


let cantidadProductos = parseInt(prompt("¿Cuántos productos quieres comprar?"));

 


for (let i = 0; i < cantidadProductos; i++) {
    let queProducto = prompt("Qué producto desea comprar?")
    const productoSeleccionado = catalogo.find((c)=>c.nombre === queProducto.toUpperCase())

    const compra = obtenerPrecio(productoSeleccionado);

    precioTotal += compra.precio;
    texto += " " + compra.nombre;
    detalleFinal.push(compra);
}

if (isNaN(precioTotal)) {
    alert("Ha habido un error al calcular el precio. Por favor, vuelve a ingresar tu pedido.");
} else {
    alert(texto + " y el precio total es: $" + precioTotal);
}

console.log(detalleFinal)