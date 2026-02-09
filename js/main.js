// ==========================================
// PROYECTO MÓDULO: CARRITO DE COMPRAS (JS)
// ==========================================

// 1. CATÁLOGO DE PRODUCTOS
const productos = [
  { id: 1, nombre: "Laptop", precio: 500000, stock: 5 },
  { id: 2, nombre: "Monitor", precio: 100000, stock: 10 },
  { id: 3, nombre: "Mouse", precio: 20000, stock: 15 },
  { id: 4, nombre: "Teclado", precio: 30000, stock: 20 },
  { id: 5, nombre: "Parlantes", precio: 50000, stock: 5 },
];

// 2. CARRITO DE COMPRAS
const carrito = [];

// 3. FUNCIÓN: Listar productos disponibles
function listarProductos() {
  console.log("\n⬇️ ===== PRODUCTOS DISPONIBLES =====");
  productos.forEach((producto) => {
    console.log(
      `${producto.id}. ${producto.nombre.padEnd(12)} | Precio: $${producto.precio.toLocaleString()} | Stock: ${producto.stock}`
    );
  });
  console.log("=====================================\n");
}

// 4. FUNCIÓN: Buscar producto por ID
function buscarProductoPorId(idBuscado) {
  return productos.find((producto) => producto.id === idBuscado);
}

// 5. FUNCIÓN: Calcular total del carrito
function calcularTotal() {
  let total = 0;
  for (const item of carrito) {
    total += item.obtenerSubtotal();
  }
  return total;
}

// 6. FUNCIÓN: Generar resumen de items
function generarResumenItems() {
  if (carrito.length === 0) return "Nada";
  // Suma de items a comprar
  return carrito.map(item => `${item.cantidad} ${item.nombre}`).join(" + ");
}

// 7. FUNCIÓN: Mostrar contenido del carrito
function mostrarCarrito() {
  
  console.log("\n🛒 ===== TU CARRITO ACTUAL =====");

  if (carrito.length === 0) {
    console.log("❌ El carrito está vacío");
    return false;
  }

  carrito.forEach((item) => {
    console.log(
      `   ▪ ${item.nombre.padEnd(12)} x${item.cantidad} | Subtotal: $${item.obtenerSubtotal().toLocaleString()}`
    );
  });

  // Mostramos la suma visualmente
  console.log("---------------------------------");
  console.log(`📦 Resumen: ${generarResumenItems()}`);
  console.log(`💰 TOTAL NETO: $${calcularTotal().toLocaleString()}`);
  console.log("=================================\n");
  return true;
}

// 8. FUNCIÓN: Agregar producto al carrito
function agregarAlCarrito() {
 
  listarProductos();

  // Validaciones
  const idInput = prompt("Ingrese el ID del producto a comprar:");
  const idProducto = Number(idInput);
  const producto = buscarProductoPorId(idProducto);

  if (!producto) {
    console.log("❌ Error: Producto no encontrado.");
    return;
  }
  // Cantidad de productos a comprar
  const cantidadInput = prompt(`¿Cuántos "${producto.nombre}" deseas llevar? (Disponibles: ${producto.stock})`);
  const cantidad = Number(cantidadInput);

  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("❌ Error: Cantidad inválida.");
    return;
  }
  if (cantidad > producto.stock) {
    console.log(`❌ Error: Solo quedan ${producto.stock} unidades de ${producto.nombre}.`);
    return;
  }

  // Lógica de suma en el array
  const itemExistente = carrito.find((item) => item.idProducto === idProducto);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
    console.log(`✅ Actualizado: Ahora tienes ${itemExistente.cantidad} x ${producto.nombre} en el carrito.`);
  } else {
    const nuevoItem = {
      idProducto: producto.id,
      nombre: producto.nombre,
      precioUnitario: producto.precio,
      cantidad: cantidad,
      obtenerSubtotal: function() {
        return this.precioUnitario * this.cantidad;
      }
    };
    carrito.push(nuevoItem);
    console.log(`✅ Agregado: ${cantidad} x ${producto.nombre}.`);
  }

  // Descontar stock
  producto.stock -= cantidad;
}

// 9. FUNCIÓN: Eliminar producto
function eliminarDelCarrito() {
  if (!mostrarCarrito()) return;

  const nombreEliminar = prompt("Escribe el NOMBRE del producto a eliminar:");
  
  const indice = carrito.findIndex(item => item.nombre.toLowerCase() === nombreEliminar.toLowerCase());

  if (indice !== -1) {
    const item = carrito[indice];
    
    // Devolver stock
    const productoOriginal = buscarProductoPorId(item.idProducto);
    if (productoOriginal) {
      productoOriginal.stock += item.cantidad;
    }

    carrito.splice(indice, 1);
    console.log(`🗑️ Eliminado: ${item.nombre} sacado del carrito.`);
  } else {
    console.log("❌ Producto no encontrado en el carrito (Revisa mayúsculas/minúsculas).");
  }
}

// 10. FUNCIÓN: Finalizar compra con Resumen
function finalizarCompra() {
  if (carrito.length === 0) {
    console.log("⚠️ El carrito está vacío.");
    return;
  }

  const totalNeto = calcularTotal();
  const iva = totalNeto * 0.19;
  const totalFinal = totalNeto + iva;
  
  // Aquí usamos la función que crea el texto "10 laptop + 3 parlantes"
  const resumenTexto = generarResumenItems();

  console.log("\n🧾 ===== BOLETA FINAL =====");
  console.log(`📦 Detalle:     ${resumenTexto}`); // <--- LO QUE PEDISTE
  console.log("-----------------------------");
  console.log(`Subtotal:       $${totalNeto.toLocaleString()}`);
  console.log(`IVA (19%):      $${iva.toLocaleString()}`);
  console.log(`TOTAL A PAGAR:  $${totalFinal.toLocaleString()}`);
  console.log("=============================");
  console.log("¡Gracias por su compra!\n");

  carrito.length = 0; 
}

// 11. MENÚ PRINCIPAL
function mostrarMenu() {
  return prompt(
    `🛒 MENU PRINCIPAL\n\n` +
    `1. Ver Productos\n` +
    `2. Agregar al Carrito\n` +
    `3. Ver Carrito\n` +
    `4. Eliminar del Carrito\n` +
    `5. Finalizar Compra\n` +
    `0. Salir\n\n` +
    `Escribe el número de opción:`
  );
}

// 12. LOOP PRINCIPAL
function iniciarCarrito() {
  let opcion = "";
  console.log("👋 Bienvenido a la Tienda (Consola Interactiva)");

  while (opcion !== "0") {
    opcion = mostrarMenu();

    // Sin console.clear() aquí para mantener historial
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
        console.log("👋 Saliendo... ¡Hasta pronto!");
        break;
      case null: 
        opcion = "0";
        console.log("👋 Operación cancelada.");
        break;
      default:
        console.log("❌ Opción no válida, intenta de nuevo.");
    }
  }
}

// EJECUTAR
iniciarCarrito();
