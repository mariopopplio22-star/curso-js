//https://dragonball-api.com/api/characters/5


//PASO 1: Función asíncrona (tiempos distintos/diferidos) - Latencia
 async function obtenerPersonaje(id){

//PASO 2: URL (endpoint)

const API_URL = `https://dragonball-api.com/api/characters/${id}`

  //PASO 3: App propensa a errores
  try {

    //PASO 4: Realizar la petición
    const respuesta = await fetch(API_URL)

    //PASO 5: ¿Existe una respuesta?
    if (!respuesta.ok){
      throw new Error(`No hay comunicación con el servidor`) //Stop
    }

    //PASO 6: Si llegamos hasta aquí, entonces hemos recibido los datos (JSON)
    //JSON (cadena) > OBJECT JS
    const datos = await respuesta.json()

    //PASO 7: Mostrar todo el JSON
    //console.log(datos)

    //Mostrar solo el nombre de las transformaciones

    //Mostrar todas las series del MCU
//const series = peliculas.mcu.series
  //series.forEach(serie => {
    //console.log(serie)
    
  //});

    const transformaciones = datos.transformations
    transformaciones.forEach(transformacion => {
      console.log(transformacion.name)
    });

  } catch(e){
    console.error(`No se pudo completar la operación: ${encodeURI}`)
  }

}

//TEST
//DEBEMOS PASAR EL ID DEL PERSONAJE
obtenerPersonaje(1)