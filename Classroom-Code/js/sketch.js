var dog = '2_1_2023/dog.jpg' ;
var myFont = '2_1_2023/Lobster-Regular.ttf' ; 
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
    text("Annihilate Thy Foes", 275,100);
    textSize(56)
    text("Show No Mercy", 500,800);
    // 
}