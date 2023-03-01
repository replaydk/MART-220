//Setting
var timer = 60;
var mission = "Collect as many eggs as you can before time walks out!" ;
var counter = 0; 
var background1;
var Victory = "You Win!"
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
var eggy = 670;
var y = 540;
var x = 0;
var m = []
//Egg Varibles
var i = 0;
var Egg;
var egg = ("./images/Egg/egg.png");
var eggObject;
var eggx = 0;
var eggcounter = 0;

//PRELOAD
function preload()
{
background1 = loadImage("./images/background1.jpg");
egg = loadImage("./images/Egg/egg.png");
//Dino Stuff
AnimationListIdle = loadStrings("./images/idle/idle.txt");
dinowalk = loadStrings("./images/walk/walk.txt");

//Egg stuff


}
//SETUP
function setup() {

    createCanvas(canvasX,canvasY); 
    image(background1,0,0,533,400);

//egg random
    for (let i = 0; i < 100; i++) {} 
         eggx +=random(200,720);

         eggx = 200


//INTERVAL FOR TIMER + ANIMATION TEMPO
    setInterval (timerFunction,1000);
    setInterval(displayCounter, 90);
//D ANIMATION WALK AND IDLE
    dinoidle = new DinoAnimation(AnimationListIdle, x,y,188,226);
    dinoidle.animate();
    dinowalk = new DinoAnimation(dinowalk, x,y,188,226);
    dinowalk.animate();
}

//DRAW
function draw(){
    
//WINDOW'S XP BACKGROUND
background(background1,1066,800); 
image(egg,eggx,eggy,100,100);
    console.log()
    console.log(eggcounter)
    





//FUNCTION FOR A + D MOVEMENT 
    DinoMovement();
//Function for Egg counter
    eggCounter();
 




//timer
    textSize(72);
    text(eggcounter,100,200);
    text(timer,685,60);
    textSize(26);
    text("Egg Counter", 50,230);
   
    if (timer <= 0)
    {
        textSize(72);
        text("Time's Up!",225,175);
    }
    textSize(26);
    stroke(10);
    text(mission, 20,45);
    
}
//Egg counter

// DOWNLOAD P.5 COLLIDE + SOUND
// ADD COLLISION TO DINOSAUR AND EGG
// ADD KEY PRESSED/ MOUSE CLICKED FUNTION TO START SOUND 
// ADD BUZZ WHEN TIMER = 0 AND DISABLE KEY MOVEMENT

function eggCounter(){
if (x > eggx) {
      
    eggcounter += 1;
    eggx  = random(x+50,canvasX) ;
    }
    if (eggx > canvasX - 50) {
        textSize(72);
        text(Victory,250,500);
        if ( eggx > canvasX - 30 ){ eggx = 10000};
        
    }
   
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
{   x += 2.2;
    dinowalk.draw(r);
    dinowalk.setX(dinowalk.getX()+2);
    dinoidle.setX(dinoidle.getX()+2);
       

}   
    else if(key == 'a')
{   x = x + -2.2;
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
