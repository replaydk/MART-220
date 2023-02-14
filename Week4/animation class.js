class DinoAnimation  
{
    constructor(AnimationListIdle, x, y, w, h)
    {
        this.AnimationListIdle = AnimationListIdle;
        this.Dinosaur = [];
        this.x = x
        this.y = y
        this.w = w
        this.h = h
}
getX()
{
    return this.x;
}

setX(x)
{
    this.x = x;
}
draw(r)
{

image(this.Dinosaur[r], this.x, this.y, this.w, this.h)
}
animate()
{

    for (var d = 0; d < AnimationListIdle.length; d++) {
       
        Trex = loadImage(this.AnimationListIdle[d]);
       // console.log(this.imageLinks[j]);
        this.Dinosaur[d] = Trex;
    }
}



}