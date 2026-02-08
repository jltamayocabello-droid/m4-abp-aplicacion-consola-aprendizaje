// CARRITO DE COMPRAS

//1. CATÁLOGO DE PRODUCTOS (Arrays de objetos)

const productos = [
    {id: 1, nombre: "Laptop", precio: 500_000, stock: 5},
    {id: 2, nombre: "Monitor", precio: 100_000, stock: 10},
    {id: 3, nombre: "Mouse", precio: 20_000, stock: 15},
    {id: 4, nombre: "Teclado", precio: 30_000, stock: 20},
    {id: 5, nombre: "Parlantes", precio: 50_000, stock: 5},
]

//2. CARRITO DEL USUARIO (Array vacío para ítems del usuario)
const carrito = [];

/*3. PRUEBA: Mostrar los productos disponibles
console.log("Productos disponibles:");
for (let i = 0; i < productos.length; i++) {
  const p = productos[i];
  console.log(p.id + ". " + p.nombre + " - $" + p.precio);
}*/


//4. FUNCIÓN: Listar productos disponibles

function listarProductos() {
  console.clear(); // Limpia la consola
  console.log("===== PRODUCTOS DISPONIBLES =====");
  
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(
      `${producto.id}. ${producto.nombre.padEnd(12)} - Precio: $${producto.precio.toLocaleString()} - Stock: ${producto.stock}`
    );
  }
  console.log("=================================");
}

// PRUEBA: Función listar productos
listarProductos();

//5. FUNCIÓN: Buscar producto por Id (IdBuscado)

function buscarProductoPorId(idBuscado) {
  return productos.find(function (producto) {
    return producto.id === idBuscado;
  });
}

/*PRUEBA: Función buscar producto por Id

console.log("Probando buscarProductoPorId:");
console.log("Producto ID 2:", buscarProductoPorId(2));
console.log("Producto ID 10 (no existe):", buscarProductoPorId(10));
*/

//6. FUNCIÓN: Calcular total del carrito (calcularTotal)

function calcularTotal() {
  let total = 0;
  for (let i=0; i < carrito.length; i++) {
    const item = carrito[i];
    total = total + (item.precioUnitario * item.cantidad);  
  }
  return total;
}

//7. FUNCIÓN: Mostrar contenido del carrito 

function mostrarCarrito() {
  console.clear()
  console.log("===== CARRITO DE COMPRAS =====");

  if (carrito.length === 0) {
    console.log("❌ El carrito está vacío");
    console.log("=================================");
    return;
  }

  for (let i=0; i < carrito.length; i++) {
    const item = carrito[i];
    const subtotal = item.precioUnitario * item.cantidad;
    console.log(`${item.idProducto}. ${item.nombre.padEnd(12)} x${item.cantidad} - Subtotal: $${subtotal.toLocaleString()}`);
  }

  
  console.log("=================================");
  console.log(`TOTAL: $${calcularTotal().toLocaleString()}`);
  console.log("=================================");

}

//PRUEBA: carrito vacío por ahora
mostrarCarrito();