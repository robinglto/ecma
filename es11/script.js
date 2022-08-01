const button = document.getElementById('btn');

button.addEventListener("click", async function (){
    const module = await import('./file.js');
    module.saludo();
});


const bignumber = 123456789123456n
 
const anotherbignumber = BigInt(1234567890123);

console.log(bignumber)
console.log(anotherbignumber)


//promesa all que se devuele cuando todas se han cumplido o rechazado


const promise = new Promise((resolve, reject)=> reject("reejct"))
const promise2 = new Promise((resolve, reject)=> resolve("resolve"))
const promise3 = new Promise((resolve, reject)=> resolve("resolve1"))

Promise.allSettled([promise,promise2, promise3])
    .then(response=> console.log(response))


//operador logico: null operator;


const elemento = null?? "default string"; 
console.log(elemento);

const elemento2 = "no null"?? "default string"; 
console.log(elemento);


//optional chaining nos permite trabajr distintos recursos

const user = {};
console.log(user?.profile?.email)//lee el elemento din romperme la app

if(user?.profile?.email){
    console.log("Email")
}else{
    console.log('failed')
}