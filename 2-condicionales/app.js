// Problema: Evaluador de Notas con Mensajes Personalizados

// Evaluador para 5 materias
let nota_mate = Number( prompt("¡Hola! Por favor, dime tu nota en matemáticas 📝") )
if (nota_mate > 0 && nota_mate < 100){
    let nota_ciencias = Number( prompt("Ahora tu nota en ciencias 📝") )
    if (nota_ciencias > 0 && nota_ciencias < 100){
        let nota_espanol = Number( prompt("¿Cuál es tu nota en español 📝?") )
        if (nota_espanol > 0 && nota_espanol < 100){
            let nota_geo = Number( prompt("¿Cuál es tu nota en geografía 📝?") )
            if (nota_geo > 0 && nota_geo < 100){
                let nota_his = Number( prompt("Por último, ¿cuál es tu nota en historia 📝?") )
                let nota = (nota_mate + nota_ciencias + nota_espanol + nota_geo + nota_his)/5
                console.log("Tu nota promedio es " + nota + ".")

                if (nota >= 90){
                    console.log("Aprobaste con 'Excelente' 🥳.")
                }
                else if (nota >= 75 && nota <= 89){
                    console.log("Aprobaste con 'Bien' 😄.")
                }
                else if (nota >= 60 && nota <= 74){
                    console.log("Aprobaste con 'Suficiente' 🙂.")
                }
                else (console.log("No aprobaste 😔."))
            }
            else (console.log("🚫 Por favor, ingresa una nota válida. El valor debe estar entre 0 y 100."))
        }
        else (console.log("🚫 Por favor, ingresa una nota válida. El valor debe estar entre 0 y 100."))
    }
    else (console.log("🚫 Por favor, ingresa una nota válida. El valor debe estar entre 0 y 100."))
}
else (console.log("🚫 Por favor, ingresa una nota válida. El valor debe estar entre 0 y 100."))


// Evaluador con una sola nota:

/* let nota = Number( prompt("¡Hola! Por favor, dime tu nota 📝") ) */

/* 
if (nota > 0 && nota < 100){
    if (nota >= 90){
        console.log("Aprobaste con 'Excelente' 🥳.")
    }
    else if (nota >= 75 && nota <= 89){
        console.log("Aprobaste con 'Bien' 😄.")
    }
    else if (nota >= 60 && nota <= 74){
        console.log("Aprobaste con 'Suficiente' 🙂.")
    }
    else (console.log("No aprobaste 😔."))
}
else (console.log("🚫 Por favor, ingresa una nota válida. El valor debe estar entre 0 y 100.")) */




// NOTAS DE CLASE 📝
//var

// Puede ser reasignada y redeclarada
/* var color = "Amarillo"
var color = "Azul"

console.log(color) */

//let

// Puede ser reasignada, pero no redeclarada (No se puede usar de nuevo let nombre = "tal cosa", por ejemplo)
/* let nombre = "Carlos"
nombre = "Pedro"

console.log(nombre) */

/* let fruta
fruta = "piña"

console.log(fruta) */

//const

// No se puede reasignar Ni redeclarar. Es la menos permisiva
/* const color = "Blanco"
color = "Verde"

console.log(color) */


//Operadores matemáticos

/* console.log( 5*2 )

let shots = 2
console.log(6 + "4" + 23)
console.log("Tus shots son: " + shots)

let msj = "Tus shots son: " + shots

let num1 = Number( prompt("Dame un número 1") )
let num2 = Number( prompt("Dame un número 2") ) */

//Coerción: obligar un tipo de dato a modificarse a otro, ej. de string a número.

/* console.log( num1 + num2 ) */

//Coerción implícita: JS interpreta los tipos de datos y realiza la operación, ej:
/* console.log("5" * 2)
 */

// Operadores de comparación

// == o != : evalúa sólo el valor
// === o !== : evalúa valor y tipo de dato

/* console.log(3 === "3") */

// Operadores lógicos

// Ej. Para entrar a VIP debes llamarte Mario y tener más de 18 años
/* let edad = 20
let nombre = "Mario".toLowerCase() */

// .toLowerCase Transforma una cadena de carácteres en minúscula; .toUpperCase en mayúscula

/* console.log( edad >= 18 && nombre === "mario") */

// Verdadero si se cumple una u otra
/* console.log( edad >= 18 || nombre === "mario") */

// Condicional if
/* let color = prompt("dime un color").toLowerCase

if( color === "azul" ){
    console.log("Adivinaste el color! 😊")
}
else if(color === "rojo"){
    console.log("Te ganaste una fresa 🍓")
}
else{
    console.log("Perdiste! 😔")
} */
