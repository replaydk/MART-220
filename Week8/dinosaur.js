class DinosaurClass
{
    constructor( x, y, w, h)
    {

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
      

    }

}

function DinoWASD(){
    if(kb.pressing('w')){
   Dinosaur.ani = "Walk";
   Dinosaur.vel.y = -5;
   }
   
   else if(kb.pressing('s')){
   Dinosaur.ani = "Walk";
   Dinosaur.vel.y = 5;
   }
   
   else{
   
       Dinosaur.vel.y = 0;
   }
   
   if(kb.pressing('d')){
   
   Dinosaur.ani = "Walk";
   Dinosaur.mirror.x = false;
   Dinosaur.vel.x = 5;
   
   }
   
   else if(kb.pressing('a')){
   Dinosaur.ani = "Walk";
   Dinosaur.mirror.x = true;
   Dinosaur.vel.x = -5;
   
   
   }
   
   else{
       Dinosaur.vel.x = 0;
   }
   
   }

   