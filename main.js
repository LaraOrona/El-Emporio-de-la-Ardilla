let cantidadProductos = parseInt(prompt("¿Cuántos productos quieres comprar?"));

function obtenerPrecio(producto) {
switch(producto) {
    case "llaveros":
        return 1000;
    case "tazas":
        return 1500;
    case "remeras":
        return 3000;
    default:
        return alert("Error: los únicos productos que tenemos son llaveros, tazas y remeras. Gracias por tu comprensión.");
    }
}

let precioTotal = 0;
let texto = "Los productos elegidos son:";
for (let i = 0; i < cantidadProductos; i++) {
    let producto = prompt("¿Qué producto quieres comprar (llaveros, tazas o remeras)?");
    producto = producto.toLowerCase();

    while (producto != "llaveros" && producto != "tazas"&& producto != "remeras"){
        producto = prompt("Ingrese Llaveros, Tazas o Remeras");
        producto = producto.toLowerCase();
    }
    let precio = obtenerPrecio(producto.toLowerCase());
    console.log(producto + " - " + precio);
    precioTotal += precio;
    texto += " " + producto;
}

if (isNaN(precioTotal)) {
    alert("Ha habido un error al calcular el precio. Por favor, vuelve a ingresar tu pedido.");
} else {
    alert(texto + " y el precio total es: $" + precioTotal);
}