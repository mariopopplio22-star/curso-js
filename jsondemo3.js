//Crea una funcion que reciba el ID del planeta, haga uso del API Dragon Ball
//y retorne una lista de personajes (name - race - affiliation). Ejemplo
//Piccolo - Namekian - Z Fighter 
//Ginyu - Frieza race - Army of Frieza
//Dende - Namekian - Z Fighter 

async function retornarPersonaje(id) {

  const API_URL = `https://dragonball-api.com/api/characters/${id}`

  try {
    const respuestas = await fetch(API_URL)

    if (!respuestas.ok){
      throw new Error(`No hay comunicación con el servidor`) //Stop
    }

    const datos = await respuestas.json()

    const planetas = datos.transformations
    planetas.forEach(planeta => {
      console.log(planeta.name)
    });

  }  catch(e){
    console.error(`No se pudo completar la operación: ${encodeURI}`)
  }
  
}

//TEST
//DEBEMOS PASAR EL ID DEL PERSONAJE
obtenerPersonaje(1)