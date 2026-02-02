
//HISTORIAL DE DATOS

const historialDatos = [];

let continuar = true;

do {
    //Input del usuario mediante prompt
    let opcion = prompt(
        "Bienvenido a la aplicación de consola. Seleccione una de las siguientes opciones\n" +
        "1. Guardar datos\n" +
        "2. Mostrar datos\n" +
        "3. Salir"
    );

    //Switch para seleccionar las opciones
    switch (opcion) {

        //Opción 1: Guardar datos
        case "1":
            let datos = parseFloat(prompt("Ingrese el monto o número"));
            if (isNaN(datos)) {
                historialDatos.push(datos);
                console.log(`Dato ${dato} agregado correctamente.`);
            } else {
                console.log("El dato ingresado no es válido.");
            }
            break;

        case "2":
            console.log("Historial de datos:");
            for (let i = 0; i < historialDatos.length; i++) {
                console.log(`Dato ${i + 1}: ${historialDatos[i]}`);
            }
            break;

        }
    }
    
