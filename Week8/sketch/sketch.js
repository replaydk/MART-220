//Dino Animation Variables
var Dinosaur; 
var DinoIdle;
var DinoWalk; 
var DinoDead;


// Egg + Obstacle Variables
var Egg;

//Random spawn + collision  
var RectObstacles =[]; 
var Trike = [];
//UI
var HealthBar;
var ScoreNumber = 0
var Score = ("Score:", ScoreNumber);
// To make the Triceratops move
var TrikeSpeed = 1;


function preload(){

 DinoIdle = loadStrings('./images/idle/idle.txt');
 DinoWalk = loadStrings('./images/walk/walk.txt');
 DinoDead = loadStrings('./images/dead/dead.txt');


}

function setup(){
createCanvas(1200,970);

//FUNCTIONS and loading animations
RandomRect();
EggStuff();
DinoStuff();
EnemyTri();
Dinosaur.addAni("Idle",DinoIdle);
Dinosaur.addAni("Walk",DinoWalk);
Dinosaur.addAni("Dead",DinoDead);


}

function draw(){

background(100,255,100);

//console.log(Dinosaur.Health)

//User Interface
push();
textSize(24);
text("Health Remaining : " + Dinosaur.Health,25,80);
fill(255,0,0)
rect(0 ,100, Dinosaur.Health  ,50);
textSize(72);
text("Score : " + ScoreNumber, 850, 75);
pop();

//SCORE + VICTORY
if (ScoreNumber >= 10){
  textSize(72);
  text("YOU WIN", 400,200);
  TrikeSpeed -= 10
  setTimeout(function() {noLoop();}, 3000);
}
//Set default animation to Idle, changed with WASD.
Dinosaur.ani = "Idle";
DinoWASD();


//Dino-egg collision
if (Dinosaur.collides(Egg)){
  //Dinosaur.Health ++;
  ScoreNumber++; 
  EggStuff();
  
}

//Trike Chasing dinosaur?? THANKS CHATGBT 
if (Dinosaur.position.x > Trike.position.x) {
  Trike.position.x += TrikeSpeed;
} else if (Dinosaur.position.x < Trike.position.x) {
  Trike.position.x -= TrikeSpeed;
}
if (Dinosaur.position.y > Trike.position.y) {
  Trike.position.y += TrikeSpeed;
} else if (Dinosaur.position.y < Trike.position.y) {
  Trike.position.y -= TrikeSpeed;
}
  

//Dino Trike Collision
if ( Dinosaur.collides(Trike)){

    Dinosaur.Health -= 50;
  }

  if (Dinosaur.Health <= 0 ){

     Dinosaur.ani = "Dead";
     Dinosaur.animation.looping = false;

     textSize(72);
     text("YOU LOSE", 400,100);
     setTimeout(function() {noLoop();}, 3000);
    TrikeSpeed +=10;
  
    
  }


}

function RandomRect() {

    for (var i = 0; i < 4; i++) {
    var obstacle = new Sprite(random(1200), random(220,800), 200, 100, 'static');
     
    obstacle.colliderWidth = obstacle.width; 
    obstacle.colliderHeight = obstacle.height; 
    
    RectObstacles.push(obstacle);
    }
  }


function EggStuff(){
    Egg = new Sprite(random(75,800),random(200,700), 100, 100); 
    Egg.img;
    Egg.img = ('./images/goodegg.png');
    Egg.scale = .15;
   // Egg.collider = 'static';
    
}

function DinoStuff(){

    Dinosaur = new Sprite();
    Dinosaur.scale = .5;
    Dinosaur.rotationLock = true;
    Dinosaur.Health = 300;

}

function EnemyTri(){
  
  Trike = new Sprite(random(100,1100),random(200, 700), 'static');
  Trike.img = ('./images/triceratops.png');
  Trike.scale = .20
  
  }
  
  



