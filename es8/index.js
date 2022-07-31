//object.entries nos permite las claves y valores de una matrix


const datos = {
    user: 'Robin',
    age: 20
}


const entries = Object.entries(datos); // arreglo de strings (matrix)
console.log(entries)
console.log(entries.length)

const valor = Object.values(datos); // arreglo de estrings con los valores solamente
console.log(valor)

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'



//async Await


const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ?setTimeout(() => resolve('Hello world'), 3000)
        :reject (new Error ('Test fallido'))

    })
}


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();



const anotherFunction = async () => {
    try{
        const hello2 = await helloWorld();
        console.log(hello2)
    } catch (error){
        console.log(error)
    }
};

anotherFunction();