
//HISTORIAL DE DATOS
const historialDatos = [];

//FUNCIÓN DE INGRESO
function ingresarDato(){
    // Input
    let input = prompt("Ingrese el monto que quiere incorporar: ");
    // Validación
    let dato = parseFloat(input);
    if (!isNaN(dato)) {
        historialDatos.push(dato);
    } else {
        alert("Error, debes ingresar un número");
    }
}

//FUNCIÓN DE VISUALIZACIÓN
function verHistorial(){
    // Opción 1: Validación de datos
    if (historialDatos.length === 0) {
        alert("No hay datos en el historial.");
        return;
    }

    // Opción 2: Visualización de datos
    let mensajeHistorial = "Historial de datos:\n";

    historialDatos.forEach((valor, indice) => {
        mensajeHistorial += `Posición ${indice}: ${valor}\n`;
    });

    alert(mensajeHistorial);
}

// CONTROLADOR PRINCIPAL

function iniciarApp(){}
let continuar = true;

do {
    //Input del usuario mediante prompt
    let opcion = prompt(
        "Bienvenido a la aplicación de consola. Seleccione una de las siguientes opciones\n" +
        "1. Ingresar un dato\n" +
        "2. Ver historial de datos\n" +
        "4. Salir"
    );

    //Switch para control de flujo
    switch (opcion) {
        case "1":
            ingresarDato(); 
            break;
        case "2":
            verHistorial();
            break;
        case "4":
            continuar = false;
            break;
        default:
            alert("Opcion no valida");
            break;
    }    
    } while (continuar);

    //EJECUCIÓN
    iniciarApp();
    
