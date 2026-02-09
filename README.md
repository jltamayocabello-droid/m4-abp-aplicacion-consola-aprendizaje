# 🛒 Proyecto Módulo 4: Aplicación de consola "Carrito de Compras"

![Language](https://img.shields.io/badge/Lenguaje-JavaScript-yellow?style=flat&logo=javascript)
![Environment](https://img.shields.io/badge/Entorno-Navegador%20Consola-orange)

Aplicación desarrollada en JavaScript (ES6) que simula un sistema de gestión de compras a través de la consola del navegador. Este proyecto forma parte de la evaluación del **Módulo 4: Fundamentos de Programación en JavaScript**.

## 📖 Descripción del Proyecto

El objetivo de este proyecto es consolidar los conocimientos fundamentales de lógica de programación. La aplicación permite a un usuario interactuar con un catálogo de productos tecnológicos, agregarlos a un carrito de compras validando stock, y generar una boleta final con detalles y cálculos de impuestos.

Se ha implementado una arquitectura basada en **Arreglos de Objetos**, donde cada ítem del carrito posee sus propios métodos para calcular totales, cumpliendo con los requisitos de Programación Orientada a Objetos (POO) básica.

## ⚙️ Funcionalidades Principales

La aplicación cuenta con un menú interactivo (`prompt`) que permite:

- ✅ **Catálogo Dinámico:** Visualización de productos con stock en tiempo real.
- ✅ **Gestión de Stock:** 
  - Validación de disponibilidad antes de la venta.
  - Descuento de unidades al comprar.
  - Restauración de unidades al inventario si se elimina un producto del carrito.
- ✅ **Carrito Inteligente:** Agrupación automática de productos repetidos (sumando cantidades en lugar de duplicar filas).
- ✅ **Formato de Resumen:** Visualización detallada en formato `Cantidad Producto: $Subtotal`.
- ✅ **Cálculos Matemáticos:** 
  - Cálculo de subtotales mediante métodos de objeto.
  - Cálculo de IVA (19%) y Total Final.
- ✅ **Persistencia Visual:** Mantiene el historial de operaciones en la consola para referencia del usuario.

## 🛠️ Tecnologías y Conceptos Aplicados

Este proyecto pone en práctica los siguientes conceptos técnicos:

*   **Estructuras de Datos:** `Array` y `Object`.
*   **Métodos de Array:** `.map()`, `.filter()`, `.find()`, `.findIndex()`, `.splice()`, `.forEach()`.
*   **Funciones:** Modularización del código y funciones dentro de objetos (Métodos).
*   **Control de Flujo:** Bucles `while` para el menú principal y `switch` para la selección de opciones.
*   **Interacción:** Uso de `prompt()`, `alert()` y `console.log()` formateado.

## 🚀 Instrucciones de Ejecución

Para probar este proyecto no necesitas instalar nada, solo un navegador web.

1.  **Clonar o descargar** este repositorio (o copiar el código del archivo `script.js`).
2.  Abrir el navegador (Google Chrome, Firefox, Edge, etc.).
3.  Abrir las **Herramientas de Desarrollador** (Presiona `F12` o `Ctrl + Shift + I`).
4.  Ir a la pestaña **Console (Consola)**.
5.  Pegar el código JavaScript y presionar `Enter`.
6.  Seguir las instrucciones del menú emergente.

## 📂 Estructura del Proyecto

```bash
├── README.md          # Documentación del proyecto
├── main.js            # Lógica principal de la aplicación
└── index.html         # (Opcional) Contenedor para vincular el script

## 🔗 Repositorio GitHub
Puedes ver el código fuente completo aquí:
https://github.com/jltamayocabello-droid/m4-abp-aplicacion-consola-aprendizaje

## ✒️ Autor

**Jorge Tamayo**

*Estudiante de Desarrollo Front-End Trainee - SENCE*


