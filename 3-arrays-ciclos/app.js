
// Clasificación de Frutas:

let frutas = [
    {
        nombre: "plátano",
        sabor: "dulce 🍉"
    },
    {
        nombre: "sandía",
        sabor: "dulce 🍉"
    },
    {
        nombre: "cereza",
        sabor: "dulce 🍉"
    },
    {
        nombre: "higo",
        sabor: "dulce 🍉"
    },
    {
        nombre: "melón",
        sabor: "dulce 🍉"
    },
    {
        nombre: "manzana roja",
        sabor: "dulce 🍉"
    },
    {
        nombre: "papaya",
        sabor: "semi-dulce 🍇"
    },
    {
        nombre: "mango",
        sabor: "semi-dulce 🍇"
    },
    {
        nombre: "pera",
        sabor: "semi-dulce 🍇"
    },
    {
        nombre: "uva",
        sabor: "semi-dulce 🍇"
    },
    {
        nombre: "guanábana",
        sabor: "semi-dulce 🍇"
    },
    {
        nombre: "guayaba",
        sabor: "ácido 🍋"
    },
    {
        nombre: "fresa",
        sabor: "ácido 🍋"
    },
    {
        nombre: "frambuesa",
        sabor: "ácido 🍋"
    },
    {
        nombre: "limón",
        sabor: "ácido 🍋"
    },
    {
        nombre: "mora",
        sabor: "ácido 🍋"
    },
    {
        nombre: "piña",
        sabor: "ácido 🍋"
    },
    {
        nombre: "toronja",
        sabor: "ácido 🍋"
    },
    {
        nombre: "maracuyá",
        sabor: "ácido 🍋"
    },
    {
        nombre: "naranja",
        sabor: "ácido 🍋"
    },
    {
        nombre: "arándano rojo",
        sabor: "ácido 🍋"
    },
    {
        nombre: "ciruela",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "tomate",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "mandarina",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "granada",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "manzana verde",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "durazno",
        sabor: "semi-ácido 🍏"
    },
    {
        nombre: "coco",
        sabor: "neutro 🥥"
    },
    {
        nombre: "aguacate",
        sabor: "neutro 🥥"
    }
]

const contador_de_frutas = {}

for ( let i = 0; i < frutas.length; i ++ ) {

    // Obtener sabor de fruta actual
    const sabor = frutas[i].sabor;
    // Obtener nombre de la fruta
    const nombre = frutas[i].nombre;

    // Si el sabor existe en el objeto contador_de_frutas, la cantidad de dicho sabor se incrementa en 1 y se agrega el nombre a la lista nombres
    if (contador_de_frutas[sabor]){

        contador_de_frutas[sabor].cantidad ++;
        contador_de_frutas[sabor].nombres.push(nombre);

    }

    // Si no, inicia en 1 y se crea una lista con el nombre de la futa (nombres)
    else{

        contador_de_frutas[sabor] = {
            cantidad: 1,
            nombres: [nombre]
        };

    }

}


// Utilizando el ciclo while
/* let i = 0

while (i < frutas.length) {

    // Obtener sabor de fruta actual
    const sabor = frutas[i].sabor;
    // Obtener nombre de la fruta
    const nombre = frutas[i].nombre;

    // Si el sabor existe en el objeto contador_de_frutas, la cantidad de dicho sabor se incrementa en 1 y se agrega el nombre a la lista nombres
    if (contador_de_frutas[sabor]){

        contador_de_frutas[sabor].cantidad ++;
        contador_de_frutas[sabor].nombres.push(nombre);

    }

    // Si no, inicia en 1 y se crea una lista con el nombre de la futa (nombres)
    else{

        contador_de_frutas[sabor] = {
            cantidad: 1,
            nombres: [nombre]
        };

    }

    i++

} */



// Mostrar los resultados en pantalla
// Para cada sabor en el objeto contador
for ( const sabor in contador_de_frutas ) {

    // Unir la lista de nombres en una cadena
    const nombres_frutas = contador_de_frutas[sabor].nombres.join(", ");

    document.write(`${sabor}: ${contador_de_frutas[sabor].cantidad} (${nombres_frutas}) <br>`)

}




// NOTAS DE CLASE:

/* // Pregunta de cultura general

let capital = prompt("¿Cuál es la capital de Colombia?").toLowerCase()

// Usar expresiones regulares para eliminar tildes
while( capital != "bogota" ){
    
    console.log("Respuesta equivocada 😔")
    // Variable control:
    capital = prompt("¿Cuál es la capital de Colombia?")

}

// Expresión regular para eliminar diacríticos
console.log( "bogotá".normalize('NFD').replace(/[\u0300-\u036f]/g,"")
 */


// Ciclo while
/* // Tabla de multiplicar del 7

let num = 1

while( num <= 10 ){

    // Template literals para concatenar variables con strings
    console.log( `7x${num}=${7*num}` )
    // Otra forma de concatenar:
    // console.log( "7x" + num + "=" + (7*num) )
    num++ // Variable de control

} */


/* // Ciclo For
// Tabla del 9

for( let i = 0; i <= 10; i ++ ){

    console.log( `9x${i}=${9*i}` )

} */


// Arrays

/* let colores = ["rojo", "red", "blue", "azul", "orange", "naranja", "verde"]
let contador = 0

for( let i = 0; i < colores.length; i ++ ){

    const element = colores[i];
    console.log(`${i+1}. ${element}`)
    contador ++

}

console.log(contador) */

/* // Array de objetos de frutas

let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "fresa",
        color: "rojo"},
    {
        nombre: "mora",
        color: "morado"
    },
    {
        nombre: "limón",
        color: "verde"
    }
]


let msj = ""

// Frutas verdes
for( let i = 0; i < frutas.length; i ++ ){

    const element = frutas[i];
    //console.log(`${i+1}. ${element.nombre}`)

    if (element.color === "verde"){
       msj += element.nombre + "💚 <br>"
    }

}

document.write("Las frutas verdes son: " + msj)
 */