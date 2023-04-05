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
function DinoMovement()
{
    if(keyIsPressed)
{
    if(key == 'd')
{  
    dinowalk.draw(r);
    dinowalk.setX(dinowalk.getX()+2);
    dinoidle.setX(dinoidle.getX()+2);
    this.x = this.x + 4;
}   
   else if(key == 'a')
    
{   

    push();
    //translate(width,0);
    //scale(-1,0);

    dinowalk.draw(r);
    pop();
    dinowalk.setX(dinowalk.getX()-2);
    dinoidle.setX(dinoidle.getX()-2)
    this.x = this.x - 4;


}

    else if(key == 'w')
    
{   this.y = this.y -2.2;
    dinowalk.draw(r);
    dinowalk.setY(dinowalk.getY()-2);
    dinoidle.setY(dinowalk.getY()-2);
}
    else if(key == 's')
    
{  this.y = this.y + 2.2;
    dinowalk.draw(r);
    dinowalk.setY(dinowalk.getY()+2);
    dinoidle.setY(dinoidle.getY()+2);
}

else
{
    dinoidle.draw(r);
}
}
    else
{
    dinoidle.draw(r);
}
}

