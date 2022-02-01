//Any.Una variable de tipo any puede contener datos de cualquier tipo, en cualquier momento.
//Si nos queremos saltar el tipado
let variasCosas: any[]=['Gato',3,-4.56,true,null,undefined]
console.log(variasCosas);

enum monedas{euro,dolar,yen};
enum animal{anfibio,reptil,ave,pez,mamifero}

let gato =
{
    especie:"Comun",
    edad:7,
    animal:animal.reptil
}
console.log(gato);