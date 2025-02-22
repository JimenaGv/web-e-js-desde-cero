// Crear Objeto a partir de un Libro

const libro = {
    titulo: "Almendra",
    autor: "Won-Pyung Sohn",
    anio: 2020,
    estado: "disponible",
    capitulos: [],

    describirLibro: function () {
        let descripcion = `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}; el estado es: ${this.estado}. Tiene los siguientes ${this.capitulos.length} capítulos: `;

        for (let i=0; i < this.capitulos.length; i++) {
            descripcion += `\n${this.capitulos[i]}`
        } 

        return descripcion
    },

    agregarCap: function (tituloCap) {
        this.capitulos.push(tituloCap)
    },

    eliminarCap: function () {
        this.capitulos.pop()
    }

}

/* console.log(libro.describirLibro()) */

const cajaTexto = document.getElementById("infoLibro")
// document.write reescribe todo el contenido de la página ‼️

function imprimir () {
    cajaTexto.innerText = libro.describirLibro()
}

function agregar () {
    entrada = prompt("Escribe el número y título del Capítulo:")
    libro.agregarCap(entrada)
    window.alert(`Se ha añadido el capítulo ${entrada} a la lista de capítulos.`)
}

function eliminar () {
    window.alert("Se ha eliminado el último capítulo de la lista.")
    libro.eliminarCap()
}

libro.agregarCap("1. Entendiendo a Yunjae")
libro.agregarCap("2. El Incidente")
libro.agregarCap("3. Las Nuevas Conexiones ")
libro.agregarCap("4. Dr. Shim")
libro.agregarCap("5. Vínculos Familiares")
console.log(libro.capitulos)

/* libro.eliminarCap()
console.log(libro.capitulos) */


// Notas de clase:
// Desestructuración

/* const auto = {
    nombre: "KIA",
    color: "azul",
    llantas: 4
}

auto.nombre = "Toyota"

const {nombre, color, llantas} = auto

console.log(nombre) //Toyota */


// Ejercicios Objetos:

/* Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:*/

/*     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(Object.entries(student))

    for (let i = 0; i < Object.entries(student).length; i++) {
        console.log(`${i+1}. ${Object.entries(student)[i]}`)
    }
 */

/* Verifica si la propiedad name se encuentra dentro del siguiente objeto:*/

/*      var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

        console.log(student.hasOwnProperty("name")) */
    

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

