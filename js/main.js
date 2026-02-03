
//HISTORIAL DE DATOS

const historialDatos = [];

let continuar = true;

do {
    //Input del usuario mediante prompt
    let opcion = prompt(
        "Bienvenido a la aplicación de consola. Seleccione una de las siguientes opciones\n" +
        "1. Ingresar un dato\n" +
        "2. Ver historial de datos\n" +
        "3. Filtrar números mayores a 100\n" +
        "4. Salir"
    );

    //Switch para control de flujo
    switch (opcion) {

        //Opción 1: Ingresar dato
        case "1":
            let dato = parseFloat(prompt("Ingrese el monto o número:"));
            if (isNaN(dato)) {
                historialDatos.push(dato);
                console.log(`Dato ${dato} agregado correctamente.`);
            } else {
                console.error("El dato ingresado no es válido.");
            }
            break;

        //Opción 2: Historial actual de datos 
        case "2":
            console.log("Historial de datos:");
            if (historialDatos.length === 0) {
                console.log("No hay datos en el historial.");
            } else {
                historialDatos.forEach((valor, indice) => {
                    console.log(`Posición ${indice}: ${valor}`);
                })
            }
            break;

        //Opción 3: Filtrar datos
        case "3":
            const mayores = historialDatos.filter(num => num > 100);
            console.log("Valores mayores a 100:", mayores);
            break;

        case "4":
            console.log("Gracias por usar la aplicación");
            continuar = false;
            break;

        default:
            console.log("Opción no válida.");
            break;

        }
    } while (continuar);
    
