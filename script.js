const URL_API = "https://jsonplaceholder.typicode.com/users";

const cuerpoTabla = document.getElementById("cuerpo-tabla");
const estado = document.getElementById("estado");
const contador = document.getElementById("contador");

// Pide los usuarios a la API y devuelve el arreglo de contactos
async function obtenerContactos() {
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }

    return respuesta.json();
}

// Crea una celda con texto plano
function crearCelda(texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    return celda;
}

// Crea una celda con un enlace (mailto: o tel:)
function crearCeldaEnlace(texto, href) {
    const celda = document.createElement("td");
    const enlace = document.createElement("a");
    enlace.href = href;
    enlace.textContent = texto;
    celda.appendChild(enlace);
    return celda;
}

function crearFila(contacto) {
    const fila = document.createElement("tr");

    const celdaNombre = crearCelda(contacto.name);
    celdaNombre.classList.add("tabla__nombre");

    fila.append(
        celdaNombre,
        crearCeldaEnlace(contacto.email, `mailto:${contacto.email}`),
        crearCeldaEnlace(contacto.phone, `tel:${contacto.phone}`),
        crearCelda(contacto.company.name)
    );

    return fila;
}

function mostrarContactos(contactos) {
    const filas = contactos.map(crearFila);
    cuerpoTabla.replaceChildren(...filas);
    contador.textContent = `${contactos.length} contactos`;
}

function mostrarError() {
    estado.textContent = "No se pudieron cargar los contactos. Intenta de nuevo más tarde.";
    estado.classList.add("estado--error");
}

async function iniciar() {
    try {
        const contactos = await obtenerContactos();
        console.log("Datos obtenidos correctamente:", contactos);
        mostrarContactos(contactos);
        estado.hidden = true;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        mostrarError();
    }
}

iniciar();
