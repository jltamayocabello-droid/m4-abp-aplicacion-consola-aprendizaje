
/* ==========================================
   CÓDIGO FINAL - PROYECTO MÓDULO 4
   Nivel: Trainee / Junior (Con Objetos)
   ========================================== */

// HISTORIAL DE DATOS (Estado Global)
const historialDatos = [];

// FUNCIÓN DE INGRESO
function ingresarDato() {
    // 1. Pedimos datos adicionales para aprovechar el Objeto
    let descripcion = prompt("Ingrese la descripción (ej: Sueldo, Compra):");
    let input = prompt("Ingrese el monto que quiere incorporar: ");
    
    // Validación
    let dato = parseFloat(input);
    
    // Validamos que haya número Y descripción
    if (!isNaN(dato) && descripcion != null) {
        
        // --- CAMBIO L5: CREACIÓN DE OBJETO LITERAL ---
        const nuevoRegistro = {
            id: historialDatos.length + 1, // Identificador único
            descripcion: descripcion,      // Propiedad 1
            valor: dato,                   // Propiedad 2
            fecha: new Date().toLocaleDateString() // Propiedad 3 (Extra)
        };

        historialDatos.push(nuevoRegistro);
        alert("✅ Dato guardado correctamente.");
    } else {
        alert("Error: Debes ingresar una descripción y un número válido.");
    }
}

// FUNCIÓN DE VISUALIZACIÓN
function verHistorial() {
    // Opción 1: Validación (Early Return)
    if (historialDatos.length === 0) {
        alert("No hay datos en el historial.");
        return;
    }

    // Opción 2: Visualización de datos
    let mensajeHistorial = "Historial de datos:\n";

    historialDatos.forEach((elemento, indice) => {
        // --- CAMBIO L5: ACCESO POR PUNTO (DOT NOTATION) ---
        // Accedemos a elemento.descripcion y elemento.valor
        mensajeHistorial += `Posición ${indice}: ${elemento.descripcion} - $${elemento.valor} (${elemento.fecha})\n`;
    });

    alert(mensajeHistorial);
}

// CONTROLADOR PRINCIPAL
function iniciarApp() { 
    // --- CORRECCIÓN DE BUG: La llave de apertura '{' inicia aquí...
    
    let continuar = true;

    do {
        // Input del usuario
        let opcion = prompt(
            "Bienvenido a la aplicación de consola.\n" +
            "1. Ingresar un dato (Objeto)\n" +
            "2. Ver historial de datos\n" +
            "4. Salir"
        );

        // Switch de control
        switch (opcion) {
            case "1":
                ingresarDato(); 
                break;
            case "2":
                verHistorial();
                break;
            case "4":
                continuar = false;
                alert("Gracias por usar la aplicación.");
                break;
            default:
                if (opcion !== null) alert("Opción no válida");
                else continuar = false; // Maneja botón cancelar
                break;
        }    
    } while (continuar);

} // ... Y la llave de cierre '}' DEBE ir aquí, envolviendo todo el ciclo.

// EJECUCIÓN
iniciarApp();
