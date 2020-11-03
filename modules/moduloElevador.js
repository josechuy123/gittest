// Crear un módulo que contenga los métodos 
//     para subir piso,
//     bajar piso,
//     cambiar de piso,
//     abrir puerta y--------
//     cerrar puerta,---------
//
// además de las variables para control de su estado, puede ser un
// elevador fijo de 6 u 8 pisos,
// exponer solamente las funciones necesarias y no aquellas que no se ven expuestas en un elevador.

let pisoActual = 1;
let estadoPuerta = 0; //1 es abierto
let totalPisos = 8;
let pisosTotales = 8;

function abrirPuerta() {
    estadoPuerta = 1;
}

function cerrarPuerta() {
    estadoPuerta = 0;
}

function irApiso(pisoDestino) {
    if (pisoDestino <= totalPisos) {
        if (pisoDestino > pisoActual) {
            subirPiso(pisoDestino);
            abrirPuerta();
        } else {
            bajarPiso(pisoDestino);
            abrirPuerta();
        }
    }
}

function subirPiso(pisoDestino) {
    cerrarPuerta();
    if (pisoActual < pisosTotales) {
        pisoActual = pisoDestino;
    }

}

function bajarPiso(pisoDestino) {
    cerrarPuerta();
    if (pisoDestino > 0) {
        pisoActual = pisoDestino;
    }
}

function estadoPiso() {
    if (estadoPuerta === 0) {
        console.log('La puerta está cerrado y el piso es', pisoActual)
    } else {
        console.log('puerta está abierta y estoy en el piso', pisoActual)
    }
}

module.exports = {
    abrir: abrirPuerta,
    cerrar: cerrarPuerta,
    irApiso: irApiso,
    estado: estadoPiso
};