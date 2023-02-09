// Data del Usuario//

const nombre = prompt("Por favor, escriba su nombre");

const apellido = prompt("Ahora, escriba su apellido");

if (nombre != "" && apellido != "") {
  alert("Bienvenido a nuestro sitio " + nombre + " " + apellido);
} else {
  alert("Por Favor ingrese el nombre y el apellido para continuar");

  const nombre = prompt("Por favor, escriba su nombre");

  const apellido = prompt("Ahora, escriba su apellido");

  alert("Bienvenido a nuestro sitio " + nombre + " " + apellido);
}

const edad = parseInt(prompt("Por favor ingrese su edad"));

while (edad < 18) {
  alert("Necesita ser mayor de 18 años para ingresar");
  edad = parseInt(prompt("Por favor ingrese nuevamentes su edad"));
}

console.log(edad);

class Producto {
  constructor(nombre, precio, detalle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = cantidad;
    this.disponible = true;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.21 * 1.25;
  }
}

var arrayProductos = [];
do {
  var comprobacion = prompt(
    "Ingrese nombre del producto o escriba salir para terminar"
  );

  if (
    comprobacion === "salir" ||
    comprobacion === "Salir" ||
    comprobacion === "SALIR"
  ) {
    break;
  } else {
    nombreP = comprobacion;
    var precioP = prompt("Ingrese el precio del producto");
    var detalleP = prompt("Ingrese informacion del producto");
    var cantidadP = prompt("Ingrese la cantidad del producto");
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
  }
} while (
  comprobacion != "salir" ||
  comprobacion != "Salir" ||
  comprobacion != "SALIR"
);

console.log(arrayProductos);

for (var producto of arrayProductos) {
  document.write("<h3> Nombre del Producto: " + producto.nombre + "</h3>");
  document.write("<h3> Detalle del producto: " + producto.detalle + "</h3>");
  document.write("<h3> Stock del Producto: " + producto.cantidad + "</h3>");
  document.write("<h3> El Precio + IVA es: $" + producto.sumarIva() + "</h3>");

  console.log(producto.nombre);
  console.log(producto.detalle);
  console.log(producto.cantidad);
  console.log(producto.sumarIva());
}
