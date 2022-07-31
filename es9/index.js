//operador de reposo

const objeto = {
    name: 'Robin',
    age: 20,
    country: 'RD'
}

let {name, ...all} = objeto;
console.log(name, all)



//operador de programacion


const objeto2 = {
    ...objeto,
    lastname: 'Galactico'
}

console.log(objeto2)


//Promise finally  in process

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world', 3000))
        : reject(new Error ('Test Error'))
    })
}
helloWorld()
    .then (response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> setTimeout(()=> console.log("Finalizado"),5000))


  /*  const regexdata = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexdata.exec ('2022-07-30');
    const year = match[1]
    const moth = match[2]
    const day = match [3]
    
    console.log(year, moth, match) */