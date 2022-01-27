///<reference path="02clases.ts"/>

CLASES.listaBloques.map(bloques => {
    
    document.addEventListener('keydown',(e)=>{
        if(e.key=='d' || e.key=='D'){
            bloques.posX+=5
        }
        if(e.key=='a' || e.key=='A'){
            bloques.posX-=5
        }
    })
})