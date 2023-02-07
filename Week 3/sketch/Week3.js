//Name 
var name = ("Dean Klakken III"); 
var nameX = 700 ; 
var nameY = 700; 
var nameS = 24; 
//Title
var title = ("Shapes that move")
var titleX = 25;
var titleY = 40;
var titleS = 50;
//Instructions
var Ins = ("Try WASD, clicking, and refreshing!"); 
var InsX = 50;
var InsY = 760 ;

var Square = (SquareX, SquareY, SquareS );
var SquareX = 200;
var SquareY = 200;
var SquareS = 50;

var Square2 = (SquareX2, SquareY2, SquareS2 );
var SquareX2 = 200;
var SquareY2 = 200;
var SquareS2 = 75;

var Square3 = (SquareX3, SquareY3, SquareS3 );
var SquareX3 = 500;
var SquareY3 = 600;
var SquareS3 = 100;

var Square4 = (SquareX4, SquareY4, SquareS4 );
var SquareX4 = 100;
var SquareY4 = 600;
var SquareS4 = 25;

var mX = 300;
var mY = 300;
var mS = 100;

var redColor = 0;
var greenColor = 0;
var blueColor = 0;

var myFont = './images/Lobster-Regular.ttf' ;

var image1;
var image2;
var image3;
var image1M = 5;
var image1X = 400;

var barkbomb = 20;


//get rid of all these random squares with classes/arrays 


function preload(){
image1 = loadImage("./images/dog.jpg");
image2 = loadImage("./images/cat.jpg");
image3 = loadImage("./images/car.jpg");
myFont = loadFont(myFont); 
}
function setup() {
createCanvas(800,800); 
background(50,100,100);
image(image1,image1X,0,418,627);
image(image2,0,300,500,523);
image(image3,300,500,838,312.);
setInterval (ticktickboom,1000)

 

for (let i = 0; i < 100; i++) {
let r = random(50); } 
(SquareX2,SquareY2,SquareS2);
SquareX2 +=random(400);
SquareY2 +=random(400);
}
function draw(){
    
    
//background(100,100,100);
//timer
if (barkbomb >= 20) {
    text("" + barkbomb,);
  }
  if (barkbomb < 20) {
    text('' + barkbomb, 100,300);
  }
  if (barkbomb == 0) {
    textSize(72);
    
    fill(250,250,250);
    square(100,250,200);
    fill(0,0,0);
myFont;
    text('RUFF',100,250,200 ,);
  }
//name
fill (255,100,100);
stroke(0);
textSize(nameS) ;
textFont(myFont);
text ( name, nameX, nameY, nameS );
//Title
fill (255,100,100);
stroke (10);
textSize(36);
text(title, titleX, titleY, titleS );
//Instructions
fill (redColor, greenColor, blueColor);
stroke(10);
textSize(36);
text(Ins, InsX, InsY,); 
//Squares
fill (255,100,100);
square (SquareX,SquareY,SquareS);
square (SquareX2,SquareY2,SquareS2);
square (SquareX3,SquareY3,SquareS3);
square (SquareX4,SquareY4,SquareS4);
//Image Movement
image(image1,image1X, 0, 100,100)
if(image1X < 0 || image1X > 700 )
{
    image1M *=-1;
}
image1X += image1M;



//SquareX Default Horizontal
if(SquareX <= 700)
{SquareX ++;}
if (SquareX >= 700)
{SquareX --;}
//Key Handling
if(keyIsPressed)
{if(key == 'a')
{SquareX3-=10;}
else if(key == 'd')
{SquareX3+=10;}
else if(key == 'w')
{SquareY3-=10;}
else if(key == 's')
{SquareY3+=10;}}
}
//Circle Spawn on Mouse Click 
function mouseClicked()  
{mX = mouseX;
mY = mouseY;
mS = random(25,100);
redColor = random(255);
greenColor = random(255);
blueColor = random(255);
fill(redColor, greenColor, blueColor);
circle (mX, mY, mS) ;       
}

function ticktickboom (){
if (barkbomb > 0)
{
    barkbomb --;}


}  
  
  
