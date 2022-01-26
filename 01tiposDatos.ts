//Booleans
let esHombre:boolean=true
console.log(typeof esHombre);

//Numbre (enteros y decimales)
let numero:number=35
numero =45

//String
let frase:string="estoy estudiando typescript"

//Any
let frase2:any="soy on string"
frase2= 45
frase2= true

//Tupla y Array 
let lista:string[]=['lechuga', 'tomate', 'cebolla'] 
let tuplaLista:[string,number,boolean]=['casa',34,true]

tuplaLista.push('sandia',43)
lista.push('sandia')
console.log(tuplaLista,lista);

//Enum o enumerables

enum Podium{
Spain,
Alemania,
Italia,
Argentina,
EEUU
}
let posicion:number=Podium.Italia
console.log(posicion);


//Void es vacio 

function saludo(palabra:string): void{
console.log(`${palabra}`);
}
saludo('Buenos Dias')

//Never 

// function error(frase:string):never {
// throw new Error(frase)
// }
// error('Error, este codigo no se puede ejecutar 111')

// Null y Undefined

let nada:undefined=undefined
let nulo:null=null