
//THIS IS NOT DONE IS A WORK IN PROGRESS WILL UPLOAD FINISHED ASAP Sorry D:
var timer = 5;
var mission = "Collect as many eggs as you can before time walks out!" ;

var canvasX = 800;
var canvasY = 800;

var Trex;
var Dinosaur = [];


var r = 0
var d = 0


var AnimationListIdle = [];
var dinoidle;
var dinowalk; 

var egg = [];
var eggX = [];


var background1;
var egg1;





function preload()
{
background1 = loadImage("../images/background1.jpg");
egg1 = loadImage("../images/Egg/egg.png");

AnimationListIdle = loadStrings("../images/idle/idle.txt");




}
function setup() {
createCanvas(canvasX,canvasY); 
image(background1,0,0,533,400);
image(egg1,650,650,100,100);
setInterval (timerFunction,1000);

dinoidle = new DinoAnimation(this.AnimationListIdle, 0.400,0,0);
dinoidle.animation();

//dinoidle = new Dinosaur(AnimationListIdle, 200,200, 245,240);


 
/* random
for (let i = 0; i < 100; i++) {
let r = random(50); } 
*/

}
function draw(){
background(background1,1066,800);
dinoidle.draw(r);
console.log(AnimationListIdle.length);

//DinoMovement();
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
function timerFunction (){
if (timer >= 0)
{
timer --;
}
if (timer <= 0) 
{
(timer = 0);
}

}

//function DrawDinosaur() {
//Dinosaur.draw();
//}



// MY ADAPTATION 
/*
keypressed()
{
    if(keyIsPressed)
{
    if(key == 'a')
{DinoX-=10;}
else if(key == 'd');
{DinoX+=10;}
}
}







/*
function EggRandom()
{

} */