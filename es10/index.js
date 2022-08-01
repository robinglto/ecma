let arregllo = [1,2,3,4, [5,6,7], [8,9,10]]


console.log(arregllo)
console.log(arregllo.flat())
console.log(arregllo.flat(2))

//flat map aplica a cada elemento del arreglo

let arreglodos = [1,2,3,4,5]

console.log(arreglodos.flatMap(value => [value, value *2]))



//trimstart elimina los espacios en blanco

let saludo = "   mmgvas dame banda    "
console.log(saludo);
console.log(saludo.trimStart())
console.log(saludo.trimEnd())
console.log(saludo.trim())


//Object.fromEntries convoca un objeto

let vacios = [['name', 'Robin'], ['age', 20]];

console.log(vacios);
console.log(Object.fromEntries(vacios))


//Symbol
/*
Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
*/


let mySymbol = 'Hola brother';
let simbolo = Symbol(mySymbol);
console.log(simbolo.description)