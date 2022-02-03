//IF-ELSE
let condicion = true;
if(condicion)
{
    console.log("Este se ejecutara siempre");
}
condicion = false;
if(condicion)
{
    console.log("Este no se ejecutara nunca");
}

if(condicion)
{
    console.log("Hago esto si es true");
}
else
{
    console.log("Hago esto si es false");
}

let x: number =35;
let y: number =6;

if(x+y>15)
{
    console.log("La suma es mayor que 15");
}
else if(x+y==10)
{
    console.log("La suma es igual 10");
}
else if(x+y==11)
{
    console.log("La suma es igual 11");
}
else
{
    console.log("La suma esta en 12 y 15 o es menor que 10")
}

//OPERADOR TERNARIO
//CONDICION?true:false
x>y? console.log("x es mayor que y"):console.log("x es menor que y");
if(x>y)
{
    console.log("x es mayor que y")
}
else
{
    console.log("x es menor que y");
}


