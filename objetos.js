//Objeto se define con una clave y un valor
const automovil = {
  marca: "Toyota",
  modelo: "Rav4",
  anio: 2025,
  operativo: true,
  valor: 120000,
  placa: "ABC-123",
  propietarios: [
    {titular: "Roxana", fecha: "2025-01-10", precio: 118000},
    {titular: "Hugo", fecha: "2025-11-15", precio: 115000},
    {titular: "Pedro", fecha: "2026-06", precio: 119000}, //ALT + MAYUS HACIA ABAJO PARA DUPLICAR
  ]
}

//¿Es posible actualizar la información

automovil.anio = 2024
automovil["anio"] = 2024

automovil.propietarios[0].titular = "Patricia"
automovil.propietarios[2].precio = "122000"

//¿Será posible agregar una nueva clave y valor?
automovil["color"] = "blanco"
automovil["equipado"] = "FULL"

console.log(automovil)
