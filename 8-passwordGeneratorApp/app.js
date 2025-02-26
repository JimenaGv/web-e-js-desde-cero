
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
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
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
            chars += array[randNumber]
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
        tempPassword += utils.getCharsFromArray(numbers, utils.generateRandomBetween(3,passLength/3))
    }
    // Si el check symbols es true
    if (includeSymbols) {
        tempPassword += utils.getCharsFromArray(symbols, utils.generateRandomBetween(3,passLength/3))
    }

    // Mostrar la contraseña en el Output de solo lectura
    console.log(tempPassword)
    passwordOutput.value = tempPassword


    /* console.log("generando ...") */
}

generateButton.addEventListener("click", generatePassword)
