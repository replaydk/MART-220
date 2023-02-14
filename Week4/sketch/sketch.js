// IF READING THIS, IT'S STILL A WORK IN PROGRESS
var timer = 50;
var mission = "Collect as many eggs as you can before time walks out!" ;
var counter = 0; 
var background1;
var egg1;

var canvasX = 800;
var canvasY = 800;

var Trex;
var Dinosaur = [];
var AnimationListIdle = [];

var r = 0;

var dinoObject;


var dinoidle;
var dinowalk; 
var dinowalkF;
var dinoidleF;
//PRELOAD
function preload()
{
background1 = loadImage("../images/background1.jpg");
egg1 = loadImage("../images/Egg/egg.png");

AnimationListIdle = loadStrings("../images/idle/idle.txt");
dinowalk = loadStrings("../images/walk/walk.txt");
//dinowalkF = loadStrings("../images/walk/walkF.txt");
//dinoidleF = loadStrings("../images/idle/idleF.txt");


//SETUP
}
function setup() {

createCanvas(canvasX,canvasY); 
image(background1,0,0,533,400);
image(egg1,650,650,100,100);

//INTERVAL FOR TIMER + ANIMATION TEMPO
setInterval (timerFunction,1000);
setInterval(displayCounter, 90);
//D ANIMATION WALK AND IDLE

dinoidle = new DinoAnimation(AnimationListIdle, 0,540,188,226);
dinoidle.animate();
dinowalk = new DinoAnimation(dinowalk, 0,540,188,226);
dinowalk.animate();

//A ANIMATION WALK AND IDLE
//dinowalkF = new DinoAnimation(dinowalkF, 0,540,188,226);
//dinowalkF.animate();
//dinoidleF = new DinoAnimation(dinoidleF, 0,540,188,226);
//dinoidleF.animate();

//RANDOM EGG SPAWN
/* random
for (let i = 0; i < 100; i++) {
let r = random(50); } 
*/
// NEED EGG STUFF, REASSIGN EGG CLASS IN INDEX
}

//DRAW
function draw(){
    console.log(DinoMovement);

//WINDOW'S XP BACKGROUND
background(background1,1066,800);
console.log(AnimationListIdle.length);
//FUNCTION FOR A + D MOVEMENT 
DinoMovement();
//FUNCTION FOR ANIMATION TEMPO
drawCounter();
//EGG
image(egg1,600,650,100,100);

textSize(72);


//timer
text(timer,685,60)
if (timer <= 0) {
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
function drawCounter() 
{
}
function displayCounter() {
counter++;
r++;
if (r > 9) {
r = 0;
}
}
