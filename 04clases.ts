class Protagonista{
     public posX:number
     private posY:number 
     protected ancho:number 
     protected alto:number
      
    constructor(posX:number,posY:number,ancho:number,alto:number){
        this.posX=posX 
        this.posY=posY 
        this.ancho=ancho 
        this.alto=alto
    }
      public saltar(){
       this.posY+=4  
       return this.posY
     }
      protected get getAncho(){
         return this.ancho
     } 
     private set setAncho(dato:number){
         this.ancho=dato
     }
}
let protagonista:Protagonista=new Protagonista(100,400,50,50)

class Secundario extends Protagonista{
          color:string
         constructor(posX:number,posY:number,ancho:number,alto:number,color:string){
             super(posX,posY,ancho,alto)
             this.color=color
         }
         informacion(){
            console.log(this.ancho)
         }
}
let secundario:Secundario=new Secundario(233,34,45,34,'blue')