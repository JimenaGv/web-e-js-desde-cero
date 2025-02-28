
// VARIABLES

// Número de caracteres
const charLength = document.querySelector("#charLength")
const lengthRange = document.querySelector("#lengthRange")

// Input Solo Lectura
const passwordOutput = document.querySelector("#passwordOutput")

// Botón Generar
const generateButton = document.querySelector("#generateButton")

// Botón Copiar
const copyButton = document.querySelector("#copyButton")



// EVENTOS + FUNCIONES ANÓNIMAS o EXTERNAS
// Nota: parámetro cuando se crea la función, argumento cuando se llama.

// Modificación del valor del número de caracteres
lengthRange.addEventListener("change", function (e) {
    charLength.textContent = e.currentTarget.value
})


// Arrays para letras, números y símbolos
const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
  
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\\", "<", ">", ",", ".", "?", "/"]
  
// Objeto "utils" para crear funciones que generen números aleatorios
// utils = funciones con tareas específicas o aisladas. Es un nombre por convención refiriéndose a una "cajita" de funciones
// Métodos para establecer el rango, recorrer el Array
const utils = {
    
    generateRandomBetween: function (min, max) {
        return Math.floor( Math.random() * (max - min + 1) + min )
    },

    getCharsFromArray: function (array, num) {
        let chars = ""

        // utils es igual que this en este caso
        for (let i = 0; i < num; i++) {
            const randNumber = utils.generateRandomBetween(0, array.length-1)

            // Transformar algunas letras (impares) en mayúsculas
            if (typeof array[randNumber] === "string") {
                // Operador ternario (parecido a un IF ELSE)
                randNumber % 2 === 0 ?
                chars += array[randNumber].toLowerCase() : chars += array[randNumber].toUpperCase()
            }

            else {
                chars += array[randNumber]
            }

        }
        return chars
    }

}


// Botón Generar
function generatePassword () {

    // Elementos que condicionan la contraseña
    const passLength = lengthRange.value
    const includeNumbers = document.querySelector("#numbers").checked
    const includeSymbols = document.querySelector("#symbols").checked

    /* console.log(passLength, includeNumbers, includeSymbols) */

    // Guardar constraseña generada
    let tempPassword = ""
    // Si el check numbers es true
    if (includeNumbers) {
        // Garantizar que no se generen más caracteres de los solicitados
        const numCount = utils.generateRandomBetween(0, Math.floor(passLength/3))
        tempPassword += utils.getCharsFromArray(numbers, numCount)

        /* tempPassword += utils.getCharsFromArray(numbers, utils.generateRandomBetween(3,passLength/3)) */
    }
    // Si el check symbols es true
    if (includeSymbols) {
        const symbolCount = utils.generateRandomBetween(0, Math.floor(passLength / 3))
        tempPassword += utils.getCharsFromArray(symbols, symbolCount);

        /* tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3,passLength/3)) */
    }

    // Generar letras
    tempPassword += utils.getCharsFromArray(letters, passLength - tempPassword.length)

    // Ver sobrante para letras
    /* console.log(passLength - tempPassword.length) */

    // Para imprimir contraseña que alterne el orden de números, letras y símbolos
    // Métodos de Strings:
    // Dividir los elementos y devolver un array: split
    // Ordenar los elementos: sort. (a,b) => a-b es la forma default de organizar. Se realiza una comparación entre pares de números continuos; si el resultado es positivo, se va a la derecha; si es negativo a la izquierda y si es cero se queda en el mismo lugar.
    // Convertir el array en string: join. Por defecto separa con comas.
    /* console.log(tempPassword.split("").sort( () => Math.random() - 0.5 ).join("")) */


    // Mostrar la contraseña en el Output de solo lectura
    /* console.log(tempPassword) */
    /* passwordOutput.value = tempPassword */
    passwordOutput.value = tempPassword.split("").sort( () => Math.random() - 0.5 ).join("")
    // 0.5 es un punto central, pues random genera números entre 0 y 1.


    // Medidor de seguridad de la contraseña
    let strength = 0;

    // Evaluar la longitud de la contraseña
    if (passLength >= 12) {
        strength += 50 // Alta longitud
        
        // Evaluar los tipos de caracteres
        if (includeNumbers && includeSymbols) {
            strength += 50 // Números y símbolos
        } 
        else if (includeNumbers || includeSymbols) {
            strength += 25 // Solo números o símbolos
        }
        else {
            strength += 10
        }

    } 

    else if (passLength >= 8) {
        strength += 25 // Longitud media

        // Evaluar los tipos de caracteres
        if (includeNumbers && includeSymbols) {
            strength += 50 // Números y símbolos
        } 
        else if (includeNumbers || includeSymbols) {
            strength += 25 // Solo números o símbolos
        }
        else {
            strength += 10
        }

    } 

    else if (passLength > 0) {
        strength += 10 // Baja longitud

        // Evaluar los tipos de caracteres
        if (includeNumbers && includeSymbols) {
            strength += 50 // Números y símbolos
        } 
        else if (includeNumbers || includeSymbols) {
            strength += 25 // Solo números o símbolos
        }
        else {
            strength += 10
        }
    }


    if (strength > 100) strength = 100; // Asegurarse de que no exceda 100

    // Actualizar el medidor de seguridad
    const strengthIndicator = document.querySelector("#strengthIndicator");
    strengthIndicator.value = strength;


    /* console.log("generando ...") */
}

generateButton.addEventListener("click", generatePassword)


// Función para Copiar contraseña
function copiarPassword () {

    // Dejar de ejecutar si no hay nada
    if (passwordOutput.value === "") return
    
    // Comprobación
    /* console.log("copiando ...") */

    const psCopy = passwordOutput.value
    navigator.clipboard.writeText(psCopy)

}

copyButton.addEventListener("click", copiarPassword)
