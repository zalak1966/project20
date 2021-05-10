var bgImg;
var cat,catimg1,catimg2,catimg3,catimg4
var mouse,mouseimg1,mouseimg2,mouseimg3,mouseimg4

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg4 = loadAnimation("images/cat4.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    
    mouseimg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,700,50,50)
    cat.addAnimation("Standing",catimg1)
    cat.scale = 0.2
    mouse = createSprite(100,700,50,50)
    mouse.addAnimation("Sleeping",mouseimg1)
    mouse.scale = 0.15
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x < cat.width - mouse.width/2){
    cat.velocityX = 0
    mouse.addAnimation("mouselaughing",mouseimg4);
    mouse.changeAnimation("mouselaughing");
    cat.addAnimation("catlaughing",catimg4);
    cat.changeAnimation("catlaughing");
  }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
    if(keyCode === LEFT_ARROW){
      cat.velocityX = -5
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation("catRunning");
      mouse.frameDelay = 25;
    }





}
