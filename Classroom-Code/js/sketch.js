var dog = 'dog.jpg' ;
var myFont = 'Lobster-Regular.ttf' ; 
function preload() {
    ximage = loadImage(dog);
    myFont = loadFont(myFont); 
}

function setup (){
createCanvas(1280,847);
}
function draw () {
    background(ximage);
    textFont(myFont);
    textSize(100);
    fill(0,0,0);
    text("What's up Gamers", 275,100);
    // 
}