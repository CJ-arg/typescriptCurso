//funcion declarada

function saludo(frase:string): string{
console.log(`${frase}`);
return `${frase}`
}
saludo('Buenos Dias')

//funcion expresada

const despedida=function(despedida:string):string{
return `${despedida}`
}
console.log(despedida('hasta luego'));

// Funcion Flecha

const position=(posY:number):number =>{
return posY
}
console.log(position(8));

// Funcion Suma Flecha
const suma=(num1:number, num2:number):string =>{
return `${num1 + num2}`
}
console.log(suma(8,4));
//devuelve string por template literals 
const suma2=(num1:number, num2:number):number =>{
return num1 + num2
}
console.log(suma2(8,4));
//devuelve numero

//parametros opcionales o por defecto

function salto(posY:number=65, posX?:number):number {
return posY
}
console.log(salto());
console.log(salto(8));

//parametros arrays por operador rest ...

function animales(... listaAnimales:string[]):string[] {
return listaAnimales
}
console.log(animales('pato', 'oso','buey', 'raton'));
