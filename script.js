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
    } else {
        alert("❌ Error al guardar la nota");
    }
});