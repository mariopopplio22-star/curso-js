// Cadena = conjunto de caracteres 
// 1 solo caracter = CHAR

//Existen 3 formas para crear cadenas JS:

const tradicional = "Hola soy un texto"
const simples = 'un gusto conocerte'
const mensaje = `Soy un texto muy especial` //ALT GR + CERRAR LAVE para backticks: comillas invertidas

const nombre = 'Juan'
const carrera = 'Programador'

const historia = `
Esta es la historia de ${nombre}
un ${carrera}
que solo queria Vibecodear
`

console.log(historia)

//Propiedades
const longitud = carrera.length //Total de caracteres
console.log(longitud)

const amigos = ["Luis", "Miguel", "Juan", "José", "Raul", "Ernesto"]

//Metodos
console.log('concat: ', carrera.concat(nombre)) //concatenar
console.log('repeat: ', carrera.repeat(3)) //repetir
console.log('replace: ', carrera.replace('a', '@')) //reemplazar primero
console.log('uppercase: ', carrera.toUpperCase()) //mayuscula
console.log('lowercase: ', carrera.toLowerCase()) //minuscula
console.log('replace all: ', carrera.replaceAll('a', '@')) //reemplazar todos
console.log('trin: ', carrera.trim()) //quita los espacios vacios externos

//Extraer los primeros 3 caracteres
console.log('3 primeros: ', carrera.substring(0, 3))

//Extraer grama de programador
console.log('caracteres internos: ', carrera.substring(3, 8))