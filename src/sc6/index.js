//default params

function metodoantiguo(name, age){
    var name = name || "Robin";
    var age = age || 20;
    console.log(name, age)
}

metodoantiguo()


function metodonuevo(name = 'Robin', age=20){
    console.log(name, age)
}


//concatenacion

let saludo = 'Hello';
let todos = 'everyone';
let viejaforma = saludo + ' ' + todos;
console.log(viejaforma)


let nuevaforma = `${saludo} ${todos}`
console.log(nuevaforma)



let lorem = "Todas las personas presentes son de buen gusto\n"
+ "y las que no estan presentes tambien."

//es6
let nuevolorem = `Todas las personas presentes son de buen gusto
y las que no estan presentes tambien lo son.`


console.log(lorem);
console.log(nuevolorem);






//objetos 


let persona = {
    name: 'Robin',
    age: 20
}


let {name, age} = persona
console.log(name, age)



// Spread Operator es6

let numerosuno = [1,2,3,4,5];
let numerosdos = [6,7,8,9,10];

let union = [...numerosuno, ...numerosdos]

console.log(numerosuno)
console.log(numerosdos)
console.log(union)



//let es de scope llamado, se puede reasignar su valor y no se puede re-declarar.
//const es de scope llamado, no se puede reasignar su valor ni re-declarar la variable.




