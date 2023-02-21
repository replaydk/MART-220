//Setting
var timer = 60;
var mission = "Collect as many eggs as you can before time walks out!" ;
var counter = 0; 
var background1;
//Canvas Size
var canvasX = 800;
var canvasY = 800;
//Dino Var
var Trex;
var Dinosaur = [];
var AnimationListIdle = [];
var dinoidle;
var dinowalk; 
var r = 0;
//var dinowalkF;
//var dinoidleF;
//var dinoObject;

//Egg Varibles
var i = 0;
var Egg;
var egg = ("./images/Egg/egg.png");
var eggObject;


//PRELOAD
function preload()
{
background1 = loadImage("./images/background1.jpg");
egg = loadImage("./images/Egg/egg.png");
//Dino Stuff
AnimationListIdle = loadStrings("./images/idle/idle.txt");
dinowalk = loadStrings("./images/walk/walk.txt");

//Egg stuff
//eggObject.LoadEgg();

}
//SETUP
function setup() {

    createCanvas(canvasX,canvasY); 
    image(background1,0,0,533,400);
image(egg,650,670,100,100);

    eggObject = new EggC(this.Egg,400,700,100,100);


//INTERVAL FOR TIMER + ANIMATION TEMPO
    setInterval (timerFunction,1000);
    setInterval(displayCounter, 90);
//D ANIMATION WALK AND IDLE
    dinoidle = new DinoAnimation(AnimationListIdle, 0,540,188,226);
    dinoidle.animate();
    dinowalk = new DinoAnimation(dinowalk, 0,540,188,226);
    dinowalk.animate();
}

//DRAW
function draw(){
//WINDOW'S XP BACKGROUND
background(background1,1066,800); 
image(egg,650,670,100,100);
    console.log(this.Egg)
    //defineEgg();



//FUNCTION FOR A + D MOVEMENT 
    DinoMovement();

  




//timer
    textSize(72);
    text(timer,685,60)
    if (timer <= 0)
    {
        textSize(72);
        text("Time's Up!",225,175);
    }
    textSize(26);
    stroke(10);
    text(mission, 20,45);
}
//Timer countdown function
function timerFunction ()
{
    if (timer >= 0)
{
    timer --;
}
    if (timer <= 0) 
{
    (timer = 0);
}
}
//DINO MOVEMENT
function DinoMovement()
{
    if(keyIsPressed)
{
    if(key == 'd')
{
    dinowalk.draw(r);
    dinowalk.setX(dinowalk.getX()+2);
    dinoidle.setX(dinoidle.getX()+2);
}
    else if(key == 'a')
{
    dinowalk.draw(r);
    dinowalk.setX(dinowalk.getX()-2);
    dinoidle.setX(dinoidle.getX()-2);
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

function displayCounter() {
    counter++;
    r++;
    if (r > 9) {
    r = 0;
}
}
