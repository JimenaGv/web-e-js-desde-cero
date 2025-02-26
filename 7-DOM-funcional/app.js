// NOTAS DE CLASE

// RECORDAR LOS PASOS!
// 1. Capturar en variables
const addButton = document.querySelector("#addButton")

// 2. Función

let e = false // Debe ser global

function agregarCarrito () {
    /* // Ver las clases
    console.log(addButton.classList)
    console.log(addButton.classList.value)

    // Transformar a Array
    console.log(Array.from(addButton.classList))
    console.log([...addButton.classList]) */

    /* // Añadir clase
    addButton.classList.add("btn-green")

    // Eliminar clase
    addButton.classList.remove("btn-blue")

    // Cambiar texto
    addButton.textContent = "Agregado 🛍️" */

    // Para alternar. La clase se activa por el orden el CSS
    addButton.classList.toggle("btn-green")

    // Uso de condicionales para cambiar el texto
    
    if (e) {
        addButton.textContent = "Add"
        e = false
    }
    else {
        addButton.textContent = "Agregado"
        e = true
    }



    // solo para verificar conexión:
    /* console.log("hola mundo") */
}

// 3. Evento
addButton.addEventListener("click", agregarCarrito)
