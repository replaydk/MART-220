
var barkbomb = 20;




function preload(){
 
}
function setup() {
createCanvas(800,800); 


setInterval (ticktickboom,1000)

 

for (let i = 0; i < 100; i++) {
let r = random(50); } 

}
function draw(){
background(255,100,50);
console.log(barkbomb);
textSize(72);
text(barkbomb,675,100)

if (barkbomb <= 0) {
textSize(72);
//fill(100,0,0);
text("Boom",600,200
);

}
}
//Timer countdown function
function ticktickboom (){
if (barkbomb >= 0)
{
barkbomb --;
}
if (barkbomb <= 0) 
{
(barkbomb = 0);
}

}