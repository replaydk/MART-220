//Setting
var timer = 60;
var mission = "Collect as many eggs as you can before time walks out!" ;
var Music = "Press M for Tunes! P to Mute."
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
var eggy1 = 670;
var y = 350;
var x = 275;
var m = []
//Egg Varibles
var i = 0;

var egg = ("./images/egg/goodegg.png");
var egg1 = ("./images/egg/badegg.png");
var eggObject;
var eggx = 0;
var eggx1 = 0;
var eggcounter = 0;


var backgroundsound;
var goodsound;
var badsound;
var timersound;


var c;
var hit = false;
var hit1 = false;



//PRELOAD
function preload()
{
background1 = loadImage("./images/background1.jpg");
egg = loadImage("./images/Egg/goodegg.png");
egg1 = loadImage("./images/egg/badegg.png");
//Dino Stuff
AnimationListIdle = loadStrings("./images/idle/idle.txt");
dinowalk = loadStrings("./images/walk/walk.txt");
backgroundsound = loadSound('./libs/Sound/Background Music.mp3');
goodsound = loadSound('./libs/Sound/ding.wav');
badsound = loadSound('./libs/Sound/badsound.wav');
timersound = loadSound('./libs/Sound/timer.wav');

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
    dinoidle = new DinoAnimation(AnimationListIdle, this.x,this.y,340,236);
    dinoidle.animate();
   
   
    dinowalk = new DinoAnimation(dinowalk, this.x,this.y,340,236);
    dinowalk.animate();
    
    
    goodegg = new EggClass(eggx  = random(100,(canvasX - 100))
    ,eggy = random(100,(canvasY - 100)));
    
    
    badegg = new EggClass(eggx1  = random(100,(canvasX - 100))
    ,eggy1 = random(100,(canvasY - 100)));
}

//DRAW
function draw(){
    DinoMovement();
    SoundStuff();
    Eggsound();
    console.log(eggcounter);

   
//WINDOW'S XP BACKGROUND
background(background1,1066,800);  
goodegg = image(egg,eggx,eggy,100,100);
badegg = image(egg1, eggx1, eggy1, 100,100)


    DinoMovement();




    //EGG DINO COLLISION
    // GOOD EGG
push();

    
pop();


// BAD EGG

hit = collideRectRect(eggx1, eggy1, 50, 50, dinowalk.x, dinowalk.y, 150, 180);
if (hit == true){eggcounter += -1, eggx1 = random(100,(canvasX - 100))
   ,eggy1 = random(100,(canvasY - 100))};



   if (hit == true){badsound.play()}
 hit = collideRectRect(eggx, eggy, 50, 50, dinowalk.x, dinowalk.y, 150, 180 );

if (hit == true){eggcounter += 1, eggx = random(100,(canvasX - 100))
    ,eggy = random(100,(canvasY - 100))};

 

textSize(72)
if (eggcounter >= 5){text("YOU WIN!",400,400)} 
if (eggcounter <= -5){text("YOU LOSE!",400,400)}






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
    text(Music, 20, 80)
    
}
//Egg counter


// ADD COLLISION TO DINOSAUR AND EGG


// ADD KEY PRESSED/ MOUSE CLICKED FUNTION TO START SOUND 
// ADD BUZZ WHEN TIMER = 0 AND DISABLE KEY MOVEMENT


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



function displayCounter() {
    counter++;
    r++;
    if (r > 9) {
    r = 0;
}


}
function Eggsound(){

    if (hit == true){goodsound.play()}

    
}

