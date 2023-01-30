//Name
var name = ("Dean Klakken III"); 
var nameX = 700 ; 
var nameY = 700; 
var nameS = 24; 
//Title
var title = ("Shapes that move")
var titleX = 25;
var titleY = 25;
var titleS = 50;
//Instructions
var Ins = ("Try WASD, clicking, and refreshing!"); 
var InsX = 50;
var InsY = 760;


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


function setup() {
  createCanvas(800,800); 
  background(50,100,100);
 
  for (let i = 0; i < 100; i++) {
  let r = random(50); }
  
     (SquareX2,SquareY2,SquareS2);
            SquareX2 +=random(400);
            SquareY2 +=random(400);
  
}

function draw(){
  //console.log(SquareX)
  //console.log(SquareX2)
  //console.log(SquareX3)
  //console.log(SquareY3)
  //console.log(mouseClicked)
  
//name
        fill (255,100,100);
        stroke(0);
        textSize(nameS) ;
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
        text(Ins, InsX, InsY,)

  
  
//Squares
        fill (255,100,100)
        square (SquareX,SquareY,SquareS);
        square (SquareX2,SquareY2,SquareS2);
        square (SquareX3,SquareY3,SquareS3);
        square (SquareX4,SquareY4,SquareS4);
//Movement
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
          {SquareY3+=10;}}}
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
  
  
