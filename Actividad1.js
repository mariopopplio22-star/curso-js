//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" --> "itanes"

const instituto = "Senati"
const longitud = instituto.length

for (let i = longitud -1; i >= 0; i--){
  console.log(instituto.substring(i, i +1))
}

//Crear una variable donde almacene una direccion de correco electronico
//verficar si el correo es valido cuando tiene un solo @
//Ejemplo: 
// jhon@gmail.com [correcto]
// luis@gmail@.com [incorrecto]
// mariagmail.com [incorrecto]

const correo = "jhon@gmail.com"
const total = 0

for (let i = 0; i < correo.length; i++){
  
}