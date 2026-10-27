//Se requieren tenga 2 claves:
//2 cadena
//2 numérico (entero, decimal)
//1 null
//1 logica (false / true)
//1 array (cadenas)
//1 array (objetos)
//1 objeto (arrays)

//const fichaPersonal = {
      //apellidos: "Mario Bautista",
    //  nombres: "Mario",
    //  telefonos: ["929936037" , "956779222"],
    //  locacion: {
      //  departamento: "Ica",
      //  provincia: "Chincha",
       // distrito: "Alto Larán",
       // direccion: "13 de junio",
      //  referencia: null

     // }
    //}

const peliculas = {
  titulo: "Iron man",
  anio: 2008,
  idiomas: ["Inglés,", "Español", "Japonés", "Francés", "Portugues"],
  duracionMin: 160,
  genero: ["Superhéroes", "Ciencia ficción"],
  preseupuesto: 140000000,
  recaudacion: 585796247.180,
  APT: false,
  elenco: [
    {nombre: "Robert Downey Jr.", personaje: "Tony Stark", rol: "Protagonista"},
    {nombre: "Gwyneth Paltrow.", personaje: "Pepper Potts", rol: "Personaje secundario"},
    {nombre: "Terrence Howard.", personaje: "James Rhodes", rol: "Personaje secundario"},
    {nombre: "Jeff Bridges.", personaje: "Obadiah Stane", rol: "Antagonista"},
    
  ],
  sinopsis: "Se trata de un multimillonario llamado Tony Stark que se ve obligado a construir un traje metálico para escapar de una cueva",
  direccion: "Jon Favreau",
  escritores: ["Mark Fergus", "Hawk Ostby", "Art Marcum", "Matt Holloway"],

  mcu: {
    peliculass: ["Capitan América", "Avengers I", "Iron Man 3"],
    series: ["Wnada Vision", "Moon Knight", "Secret Invasion"]
  }
}

//Cuál es el ultimo elemento de idiomas
console.log(peliculas.idiomas[peliculas.idiomas.length -1]) //Portugues

//¿Cual es el personaje del primer actor?
console.log(peliculas.elenco[0].personaje) //Iron man

//¿Cual es el rol del ultimo actor
console.log(peliculas.elenco[peliculas.elenco.length -1].rol)

//Mostrar todas las series del MCU
const series = peliculas.mcu.series
  series.forEach(serie => {
    console.log(serie)
    
  });