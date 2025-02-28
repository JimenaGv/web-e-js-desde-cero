// Proyecto Caja de Comentarios

// Captura elementos caja comentarios
// Input
const inputComment = document.getElementById("inputComentario")
// Botón Comentar
const btnComment = document.getElementsByTagName("button")[0]
// Caja de comentarios
const boxComments = document.getElementsByClassName("comentarios")[0]

// Array de comentarios
const comments = []

// Contador
let i = 0


// Funciones
let comentar = (event) => {

    // Para prevenir que se actualice el sitio a dar click en Comentar
    event.preventDefault()

    // Detener ejecución si no hay comentario
    if (inputComment.value === "") return

    // Crear instancia de Date y guardarla en variable
    const fecha = new Date()
    // Opciones de formato de fecha
    const opciones = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }
    // Ejecutar método para obtener formato de fecha actual
    const ahora = fecha.toLocaleDateString("es-ES", opciones)

    // Para mostrar lo que el usuario puso
    /* console.log(inputComment.value) */

    // Crear objeto con la información del comentario
    const comment = {
        id: i++,
        date: ahora,
        comment: inputComment.value,
        user: "Pepe Pérez"
    }

    // Añadir comentario (Objeto) al array
    comments.push(comment)

    /* // Para mostrar los comentarios, añadiendo uno debajo de otro
    boxComments.innerHTML += `<li>${inputComment.value}</li>` */

    // Llamar función printComment con array comments como argumento
    printComment(comments)

    // Para limpiar la caja de input
    inputComment.value = ""

    /* // Para ver la información del pointer event
    console.log(event) */

}


// Función para imprimir array de comentarios
let printComment = (array) => {

    boxComments.innerHTML = ""

    // for each es un método para iterar Arrays
    array.forEach((element,i) => {

        // Desestructuración
        const {date, comment, user} = element

        // Crear lista
        let li = document.createElement("li")
        li.style.position = "relative"

        // Crear botón Eliminar
        const btnDelete = document.createElement("span")
        btnDelete.innerHTML = "❌"
        btnDelete.style.cursor = "pointer"
        btnDelete.style.position = "absolute"
        btnDelete.style.top = "10px"
        btnDelete.style.right = "10px"
        btnDelete.onclick = () => {
            array.splice(i,1)
            printComment(array)
        }

        /* console.log(comment, date, user) */
        
        // Mostrar comentarios
        li.innerHTML += 
        `<b>👤${user}</b><br><br>${comment}<br><br><small>${date}</small>`

        // Añadir botón Eliminar
        li.appendChild(btnDelete)

        // Añadir comentario a la caja de comentarios. Actuales aparecen primero
        boxComments.prepend(li)

    });

}


// Vinculación de evento con EventListener
// (evento,función)
btnComment.addEventListener("click",comentar)
