//Crear un objeto que almacene datos de una mascota
//desestructurar utilizando un minimo de 4 variables
//mostrar en consola. 

const mascota = {
    nombre: "Pequeña",
    especie: "Perro",
    raza: "Shizu",
    genero: "Hembra",
    edad: "2 años",
    estaVacunada: true
};

const { nombre, especie, genero, edad } = mascota;

console.log(`Nombre: ${nombre}`);
console.log(`Especie: ${especie}`);
console.log(`Género: ${genero}`);
console.log(`Edad: ${edad}`);