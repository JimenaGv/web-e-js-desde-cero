// Problema: Seguimiento de libros

let librosLeidos = []

function agregarLibro(titulo) {
    librosLeidos.push(titulo)
    console.log(`Se añadió ${titulo} a la lista de libros leídos. 📖`)
}

function mostrarLibrosLeidos(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        document.write(`${i + 1}.- ${arreglo[i]} <br>`);
      }
}

agregarLibro("Cien años de soledad")
agregarLibro("Hábitos atómicos")
agregarLibro("El gato negro")
agregarLibro("El hombre en busca del sentido")
agregarLibro("Almendra")

document.write(`<h2> Has leído los siguientes libros: 📚 <br>`)
mostrarLibrosLeidos(librosLeidos)




// Apuntes de clase:
/* // Declarar función
function suma (n1,n2){
    let total = n1 + n2
    // return si vamos a utilizar el resultado en otro entorno como guardarlo en otra variable
    return `El total de la suma es: ${total}`
}

console.log(suma(4,2))

// Hoisting 
// Scope */

/* let cajaDeFrutas = []

// Esto solo funciona una vez:
//let miInput = prompt("dime una fruta")

function agregarFruta (fruta){
    cajaDeFrutas.push(fruta)
    return cajaDeFrutas.length
}

function mostrarFrutas (array){

    for (let i = 0; i < array.length; i++) {
        document.write(`${i + 1}.- ${array[i]} <br>`);
      }

}

agregarFruta("piña")
agregarFruta("manzana")
agregarFruta("pera")
agregarFruta("uva")
mostrarFrutas(cajaDeFrutas) */

/* let cajaDeFrutas = []

function agregarFruta (){

    let fruta = prompt("Añade una fruta")

    while (fruta != "salir"){
        cajaDeFrutas.push(fruta)
        fruta = prompt("Añade una fruta")
    }

}

function mostrarFrutas (array){

    for (let i = 0; i < array.length; i++) {
        document.write(`${i + 1}.- ${array[i]} <br>`);
      }

} */


/* let car = {
    color: "red",
    marca: "Audi",

    // Métodos
    // Función anónima
    acelerar: function(){
        console.log("Ruuuuun 🚘")
    }
} */