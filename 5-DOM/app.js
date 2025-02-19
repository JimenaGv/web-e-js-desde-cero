// Proyecto Caja de Comentarios

// Captura elementos caja comentarios
// Input
const inputComment = document.getElementById("inputComentario")
// Botón Comentar
const btnComment = document.getElementsByTagName("button")[0]
// Caja de comentarios
const boxComments = document.getElementsByClassName("comentarios")[0]

// Funciones
let comentar = (event) => {
    // Para prevenir que se actualice el sitio a dar click en Comentar
    event.preventDefault()
    // Para mostrar lo que el usuario puso
    console.log(inputComment.value)
    // Para mostrar los comentarios, añadiendo uno debajo de otro
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    // Para limpiar la caja de input
    inputComment.value = ""

    // Lo ideal es que los comentarios se guarden en un Array
    // Buscar propiedades de los elementos del DOM en MDN

    /* // Para ver la información del pointer event
    console.log(event) */
}

// Vinculación de evento con EventListener
// (evento,función)
btnComment.addEventListener("click",comentar)




// NOTAS DE CLASE:

// Arrow function; el nombre está como variable. Empieza a existir desde donde se declara. function saludame () {} existe en todo el documento.

/* let saludame = () => {
    alert("Hola mundo")
} */


/* // 1. Leer nodos o capturar elementos en variables
// const para proteger de sobreescritura
const parrafo = document.getElementById("txt")

// 2. Crear funciones
let modificar = () => {
    parrafo.innerText = "JavaScript DOM 🔥"
    parrafo.style.color = "tomato"
    parrafo.style.fontSize = "2rem"
    parrafo.style.textDecoration = "underline"
    parrafo.style.fontStyle = "italic"
} */

// Captura de elementos por tag
/* const listaElements = document.getElementsByTagName("li") */
// Se puede acceder a un elemento único con listaElements[indice].
// Parece un Array pero NO lo es, es un HTML Collection. Podría verse como una lista de objetos?

// Ejemplo con clases
/* const listaElements = document.getElementsByClassName("list") */
