let persona:{nombre:string, apellido:string, edad:number,accion():string }={

nombre:'Javier',
apellido:'Craes',
edad: 44,
accion(){
return"Hola"
}
}

//tipos

type Asignaturas={
matematicas:boolean,
naturaleza:boolean,
fisica:boolean,
dibujo:boolean,
lenguaje:boolean,
musica:boolean,
activoActual:()=>boolean
}
//crear un objeto a partir del tipo

let antonio:Asignaturas ={
matematicas:true,
naturaleza:false,
fisica:true,
dibujo:true,
lenguaje:true,
musica:false,
activoActual(){
return true
}
}