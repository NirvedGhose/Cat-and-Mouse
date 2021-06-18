var backimg;
var cat,catimg;
var mouse,mouseimg;
var catRun;
var mouseTease;
var catHappy;
var mouseHappy;

function preload() {
    //load the images here
    backimg = loadImage("images/garden.png")
    catimg = loadAnimation("images/cat1.png")
    mouseimg = loadAnimation("images/mouse1.png")
    catRun = loadAnimation("images/cat2.png","images/cat3.png")
    mouseTease =loadAnimation("images/mouse2.png","images/mouse3.png")
    catHappy = loadAnimation("images/cat4.png")
    mouseHappy = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,700)
mouse = createSprite(200,700)
cat.addAnimation("standing",catimg)
mouse.addAnimation("standing",mouseimg)
cat.scale = 0.2
mouse.scale = 0.15
}

function draw() {

    background(backimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x<(cat.width-mouse.width)/2) {
    cat.velocityX = 0;
    cat.addAnimation("Happy",catHappy);
cat.changeAnimation("Happy")
    mouse.addAnimation("Standing",mouseHappy);
    mouse.changeAnimation("Standing")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("Running",catRun);
cat.changeAnimation("Running")
    mouse.addAnimation("Teasing",mouseTease);
    mouse.changeAnimation("Teasing")
}

}
