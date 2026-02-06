// CARRITO DE COMPRAS

//1. CATÁLOGO DE PRODUCTOS (Arrays de objetos)

const productos = [
    {id: 1, nombre: "Laptop", precio: 500_000, stock: 5},
    {id: 2, nombre: "Monitor", precio: 100_000, stock: 10},
    {id: 3, nombre: "Mouse", precio: 20_000, stock: 15},
    {id: 4, nombre: "Teclado", precio: 30_000, stock: 20},
    {id: 5, nombre: "Parlantes", precio: 50_000, stock: 5},
]

//2. CARRITO DEL USUARIO (Array vacío)

const carrito = [];

//3. PRUEBA: Mostrar los productos disponibles
console.log("Productos disponibles:");
for (let i = 0; i < productos.length; i++) {
  const p = productos[i];
  console.log(p.id + ". " + p.nombre + " - $" + p.precio);
}


//FUNCIÓN: listar productos de forma organizada

function listarProductos() {
  console.clear(); // Limpia la consola
  console.log("===== PRODUCTOS DISPONIBLES =====");
  
  for (let i = 0; i < productos.length; i++) {
    const p = productos[i];
    console.log(
      `${p.id}. ${p.nombre.padEnd(12)} - Precio: $${p.precio.toLocaleString()} - Stock: ${p.stock}`
    );
  }
  console.log("=================================");
}

// PROBAR la función
listarProductos();