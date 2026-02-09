// CARRITO DE COMPRAS

//1. CATÁLOGO DE PRODUCTOS (Arrays de objetos)

const productos = [
  { id: 1, nombre: "Laptop", precio: 500_000, stock: 5 },
  { id: 2, nombre: "Monitor", precio: 100_000, stock: 10 },
  { id: 3, nombre: "Mouse", precio: 20_000, stock: 15 },
  { id: 4, nombre: "Teclado", precio: 30_000, stock: 20 },
  { id: 5, nombre: "Parlantes", precio: 50_000, stock: 5 },
];

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
  console.log("===== PRODUCTOS DISPONIBLES =====")

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    console.log(
      `${producto.id}. ${producto.nombre.padEnd(12)} - Precio: $${producto.precio.toLocaleString()} - Stock: ${producto.stock}`,
    );
  }
  console.log("=================================")
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
  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    total = total + item.precioUnitario * item.cantidad;
  }
  return total;
}

//7. FUNCIÓN: Mostrar contenido del carrito

function mostrarCarrito() {
  console.clear();
  console.log("===== CARRITO DE COMPRAS =====");

  if (carrito.length === 0) {
    console.log("❌ El carrito está vacío");
    console.log("=================================");
    return;
  }

  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    const subtotal = item.precioUnitario * item.cantidad;
    console.log(
      `${item.idProducto}. ${item.nombre.padEnd(12)} x${item.cantidad} - Subtotal: $${subtotal.toLocaleString()}`,
    );
  }

  console.log("=================================");
  console.log(`TOTAL: $${calcularTotal().toLocaleString()}`);
  console.log("=================================");
}

//PRUEBA: carrito vacío por ahora
mostrarCarrito();

//8. FUNCIÓN: Agregar producto al carrito

function agregarAlCarrito() {
  //Mostrar productos para que el usuario elija
  listarProductos();

  //Preguntar al usuario que producto quiere comprar
  const idTexto = prompt("Ingrese el ID del producto que desea comprar");
  const idProducto = Number(idTexto);

  //Validar que sea número válido
  if (isNaN(idProducto) || idProducto <= 0) {
    console.log("❌ El ID debe ser un número positivo");
    return;
  }

  //Buscar producto
  const producto = buscarProductoPorId(idProducto);
  if (!producto) {
    console.log("❌ Error: Producto no encontrado");
    return;
  }

  //Pedir Cantidad
  const cantidadTexto = prompt(
    `Ingrese la cantidad de unidades: ${producto.nombre}`,
  );
  const cantidad = Number(cantidadTexto);

  //Validar cantidad
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("❌ La cantidad debe ser un número positivo");
    return;
  }

  //Validar stock suficiente
  if (cantidad > producto.stock) {
    console.log(`❌ No hay stock suficiente. Disponible: ${producto.stock}`);
    return;
  }

  //Buscar si ya existe en carrito
  const itemExistente = carrito.find((item) => item.idProducto === idProducto);

  if (itemExistente) {
    //Si existe, aumentar la cantidad
    itemExistente.cantidad += cantidad;
    console.log(
      `Se agregaron ${cantidad} unidades de ${producto.nombre} al carrito`,
    );
  } else {
    //Crear nuevo item
    const nuevoItem = {
      idProducto: producto.id,
      nombre: producto.nombre,
      precioUnitario: producto.precio,
      cantidad: cantidad,
    };
    carrito.push(nuevoItem);
    console.log(`Se agrega ${producto.nombre} al carrito`);
  }

  //Actualizar Stock
  producto.stock -= cantidad;

  //Mostrar carrito actualizado
  mostrarCarrito();
  console.log("\nPresiona F12 → Console para continuar...");
}

//9. FUNCIÓN: Menú Principal
function mostrarMenu() {
  console.clear();
  console.log("🛒 === Menú Principal ===");
  console.log("1. 📋 Listar productos");
  console.log("2. ➕ Agregar al carrito");
  console.log("3. 🛒 Ver carrito");
  console.log("4. 🗑️ Eliminar del carrito");
  console.log("5. 💰 Finalizar compra");
  console.log("0. ❌ Salir");
  console.log("=============================");
}

//10. Función: Eliminar producto del carrito
function eliminarDelCarrito() {
  mostrarCarrito();
  
  if (carrito.length === 0) {
    console.log("❌ El carrito está vacío");
    return;
  }
  
  const idTexto = prompt("Ingrese el ID del producto a eliminar:");
  const idProducto = Number(idTexto);
  
  if (isNaN(idProducto) || idProducto <= 0) {
    console.log("❌ ID inválido");
    return;
  }
  
  const indice = carrito.findIndex(item => item.idProducto === idProducto);
  
  if (indice === -1) {
    console.log("❌ Producto no encontrado en el carrito");
    return;
  }
  
  const item = carrito[indice];
  const cantidadTexto = prompt(`¿Cuántas unidades de ${item.nombre} eliminar? (actual: ${item.cantidad})`);
  const cantidadEliminar = Number(cantidadTexto);
  
  if (isNaN(cantidadEliminar) || cantidadEliminar <= 0 || cantidadEliminar > item.cantidad) {
    console.log("❌ Cantidad inválida");
    return;
  }
  
  item.cantidad -= cantidadEliminar;
  
  if (item.cantidad === 0) {
    carrito.splice(indice, 1);  // Elimina completamente si cantidad es 0
  }
  
  // Restaurar stock
  const producto = buscarProductoPorId(idProducto);
  if (producto) {
    producto.stock += cantidadEliminar;
  }
  
  console.log(`✅ Eliminadas ${cantidadEliminar} unidades de ${item.nombre}`);
  mostrarCarrito();
}

//11. Función: Finalizar compra
function finalizarCompra() {
  if (carrito.length === 0) {
    console.log("❌ Carrito vacío. No hay compra que finalizar.");
    return;
  }
  
  mostrarCarrito();
  const total = calcularTotal();
  console.log(`\n💳 ¡Compra finalizada!`);
  console.log(`Total a pagar: $${total.toLocaleString()}`);
  console.log("¡Gracias por su compra!");
  
  // Vaciar carrito y restaurar todo el stock
  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    const producto = buscarProductoPorId(item.idProducto);
    if (producto) {
      producto.stock += item.cantidad;
    }
  }
  carrito.length = 0;  // Vacía el carrito
}

//12.FUNCIÓN PRINCIPAL: Loop del programa
function iniciarCarrito() {
  let opcion = "";

  while (opcion !== "0") {
    mostrarMenu();
    opcion = prompt("Ingrese una opción");

    switch (opcion) {
      case "1":
        listarProductos();
        break;
      case "2":
        agregarAlCarrito();
        break;
      case "3":
        mostrarCarrito();
        break;
      case "4":
        eliminarDelCarrito();
        break;
      case "5":
        finalizarCompra();
        break;
      case "0":
        console.log("Gracias por comprar en nuestra tienda");
        break;
      default:
        console.log("❌ Opcion inválida");
    }

    if (opcion !== "0" && opcion !== "2" && opcion !== "3") {
      prompt("Presiona ENTER para continuar");
    }
  }
}

//EJECUTAR
iniciarCarrito();
