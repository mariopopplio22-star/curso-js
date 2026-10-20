const persona = {
  apellidos: "Bautista Alanya",
  nombres: "Mario",
  edad: "22",
  skills: ["PHP", "Java", "JavaScript", "SQL", "Python"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad

console.log(apellidos, nombres, edad)
*/

//Desestructura es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la colecion
//NOTA: Las variables coinciden con las claves
const {nombres, skills} = persona

console.log(nombres, skills)


