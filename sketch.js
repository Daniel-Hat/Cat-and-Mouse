var garden,cat,mouse;
var catImg4,mouseImg4,gardenImg;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    garden = loadImage("images/garden.png");
    catImg2 = loadAnimation("images/cat2.png");
    catImg3 = loadAnimation("images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    cat = createSprite(870,600)
    cat.addAnimation("catSleeping",catImg2);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg2);
    mouse.scale = 0.15
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width )/ 2 ){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",catImg4);
        cat.x = 300;
        cat.changeAnimation("catLastImage");
        cat.scale = 0.2;
        mouse.addAnimation("mouseLastImage",mouseImg4);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseLastImage")
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing",mouseImg3);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
}

}
