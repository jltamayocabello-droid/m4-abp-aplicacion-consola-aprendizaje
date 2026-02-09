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

// 3. LISTAR PRODUCTOS DISPONIBLES
function listarProductos() {
  console.log("\n⬇️ ===== PRODUCTOS DISPONIBLES =====");
  productos.forEach((producto) => {
    console.log(
      `${producto.id}. ${producto.nombre.padEnd(12)} | Precio: $${producto.precio.toLocaleString()} | Stock: ${producto.stock}`
    );
  });
  console.log("=====================================\n");
}

// 4. BUSCAR POR ID
function buscarProductoPorId(idBuscado) {
  return productos.find((producto) => producto.id === idBuscado);
}

// 5. CALCULAR TOTAL
function calcularTotal() {
  let total = 0;
  for (const item of carrito) {
    total += item.obtenerSubtotal();
  }
  return total;
}

// 6. GENERAR RESUMEN CON FORMATO PERSONALIZADO
function mostrarResumenFormateado() {
  if (carrito.length === 0) {
    console.log("Nada");
    return;
  }
  // Recorre el carrito e imprime cada línea con el formato pedido:
  // "10 Laptop: $5.000.000"
  carrito.forEach(item => {
    console.log(`${item.cantidad} ${item.nombre}: $${item.obtenerSubtotal().toLocaleString()}`);
  });
}

// 7. MOSTRAR CARRITO
function mostrarCarrito() {
  console.log("\n🛒 ===== TU CARRITO ACTUAL =====");

  if (carrito.length === 0) {
    console.log("❌ El carrito está vacío");
    return false;
  }

  // Usamos la nueva función de formato aquí
  mostrarResumenFormateado();

  console.log("---------------------------------");
  console.log(`💰 TOTAL: $${calcularTotal().toLocaleString()}`);
  console.log("=================================\n");
  return true;
}

// 8. AGREGAR AL CARRITO
function agregarAlCarrito() {
  listarProductos();

  const idInput = prompt("Ingrese el ID del producto a comprar:");
  const idProducto = Number(idInput);
  const producto = buscarProductoPorId(idProducto);

  if (!producto) {
    console.log("❌ Error: Producto no encontrado.");
    return;
  }

  const cantidadInput = prompt(`¿Cuántos "${producto.nombre}" deseas llevar? (Disponibles: ${producto.stock})`);
  const cantidad = Number(cantidadInput);

  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("❌ Error: Cantidad inválida.");
    return;
  }
  if (cantidad > producto.stock) {
    console.log(`❌ Error: Stock insuficiente.`);
    return;
  }

  // Buscar si ya existe
  const itemExistente = carrito.find((item) => item.idProducto === idProducto);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
    console.log(`✅ Agregaste ${cantidad} más a ${producto.nombre}.`);
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
    console.log(`✅ Agregado: ${producto.nombre}.`);
  }

  producto.stock -= cantidad;
}

// 9. ELIMINAR DEL CARRITO
function eliminarDelCarrito() {
  if (!mostrarCarrito()) return;

  const nombreEliminar = prompt("Escribe el NOMBRE del producto a eliminar:");
  const indice = carrito.findIndex(item => item.nombre.toLowerCase() === nombreEliminar.toLowerCase());

  if (indice !== -1) {
    const item = carrito[indice];
    const productoOriginal = buscarProductoPorId(item.idProducto);
    
    if (productoOriginal) productoOriginal.stock += item.cantidad;

    carrito.splice(indice, 1);
    console.log(`🗑️ Eliminado: ${item.nombre}.`);
  } else {
    console.log("❌ No encontrado.");
  }
}

// 10. FINALIZAR COMPRA
function finalizarCompra() {
  if (carrito.length === 0) {
    console.log("⚠️ Carrito vacío.");
    return;
  }

  const totalNeto = calcularTotal();
  const iva = totalNeto * 0.19;
  const totalFinal = totalNeto + iva;

  console.log("\n🧾 ===== BOLETA FINAL =====");
  
  // Aquí usamos el formato solicitado para el detalle
  mostrarResumenFormateado(); 

  console.log("-----------------------------");
  console.log(`Subtotal:      $${totalNeto.toLocaleString()}`);
  console.log(`IVA (19%):     $${iva.toLocaleString()}`);
  console.log(`TOTAL A PAGAR: $${totalFinal.toLocaleString()}`);
  console.log("=============================");
  console.log("¡Gracias por su compra!\n");

  carrito.length = 0;
}

// 11. MENÚ
function mostrarMenu() {
  return prompt(
    `🛒 MENU PRINCIPAL\n\n` +
    `1. Ver Productos\n` +
    `2. Agregar al Carrito\n` +
    `3. Ver Carrito\n` +
    `4. Eliminar del Carrito\n` +
    `5. Finalizar Compra\n` +
    `0. Salir`
  );
}

// 12. INICIAR
function iniciarCarrito() {
  let opcion = "";
  console.log("👋 Bienvenido a la Tienda");

  while (opcion !== "0") {
    opcion = mostrarMenu();
    switch (opcion) {
      case "1": listarProductos(); break;
      case "2": agregarAlCarrito(); break;
      case "3": mostrarCarrito(); break;
      case "4": eliminarDelCarrito(); break;
      case "5": finalizarCompra(); break;
      case "0": console.log("👋 Adiós"); break;
      case null: opcion = "0"; break;
      default: console.log("❌ Opción inválida");
    }
  }
}

iniciarCarrito();
