console.log("Script cargado correctamente");
const API_URL = "https://dju1980u4e.execute-api.us-east-1.amazonaws.com/notas";

const boton = document.getElementById("guardar");

boton.addEventListener("click", async () => {
    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;

    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Titulo: titulo,
            Contenido: contenido
        })
    });

    if (respuesta.ok) {
        alert("✅ Nota guardada correctamente");
        cargarNotas();
    } else {
        alert("❌ Error al guardar la nota");
    }
});

async function cargarNotas() {
    const respuesta = await fetch(API_URL);
    const notas = await respuesta.json();

    console.log(notas);

    const contenedor = document.getElementById("lista-notas");
    contenedor.innerHTML = "";

    notas.forEach(nota => {
        const div = document.createElement("div");
        div.innerHTML = 
    `<h3>${nota.Titulo}</h3>
    <p>${nota.Contenido}</p>
    <button onclick="editarNota('${nota.NotaId}', '${nota.Titulo}', '${nota.Contenido}')">✏️ Editar</button>
    <button onclick="borrarNota('${nota.NotaId}')">🗑️ Borrar</button>
    <hr>
`;
contenedor.appendChild(div);
        
    });
}

cargarNotas();

async function borrarNota(id) {
    const confirmar = confirm("¿Seguro que querés borrar esta nota?");
    if (!confirmar) return;

    const respuesta = await fetch(`${API_URL}?id=${id}`, {
        method: "DELETE"
    });

    if (respuesta.ok) {
        cargarNotas();
    } else {
        alert("❌ Error al borrar la nota");
    }
}

async function editarNota(id, tituloActual, contenidoActual) {
    const nuevoTitulo = prompt("Editar título:", tituloActual);
    if (nuevoTitulo === null) return;

    const nuevoContenido = prompt("Editar contenido:", contenidoActual);
    if (nuevoContenido === null) return;

    const respuesta = await fetch(`${API_URL}?id=${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: nuevoTitulo,
            contenido: nuevoContenido
        })
    });

    if (respuesta.ok) {
        cargarNotas();
    } else {
        alert("❌ Error al editar la nota");
    }
}