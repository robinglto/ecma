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

