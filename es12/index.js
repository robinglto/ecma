//replace reemplaza el elemento en la primera coincidencia
//replaceAll reemplaza todas las coincidencias

const string = "En la calle acabo de ver un auto rojo parqueado junto a un auto azul igual al auto de mi madre";

const replaced = string.replace("calle", "casa del vecino");

const replacedtwo = string.replaceAll("auto", "carro")


console.log(string);
console.log(replaced);
console.log(replacedtwo);

//el simbolo de # vuelve privado un metodo de una clase

class Mensaje {
    #shoe(valor){
        console.log(valor)
    };
}

const mensaje = new Mensaje();
mensaje.shoe("Hello")




//Promise.any() es otra forma de manejar varias promesas, 
//que retornará la primera promesa que sea resuelta y se 
//rechazará si todas las promesas son rechazadas.

const promise1 = new Promise((resolve, reject )=> reject('1'))
const promise2 = new Promise((resolve, reject )=> resolve('2'))
const promise3 = new Promise((resolve, reject )=> resolve('3'))



Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)) 


    /**
     Un objeto WeakRef consiste en mantener una referencia 
     débil a otro objeto, para evitar que ese objeto sea 
     eliminado por el Garbage Collection{target="_blank"}.
     */
