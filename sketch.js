var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redG,blueG,pinkG,greenG,arrow_group
var score = 0
var red,green,pink,blue

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  arrow_group = new Group();
  redG  = new Group();
  blueG  = new Group();
  pinkG  = new Group();
  greenG  = new Group();

  //creating background
  scene = createSprite(0,0,400,400);
  scene.depth = 0.01
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 //background(0);
  // moving ground
  
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  // if (keyCode === 32) {
    // createArrow();
    
    
  // }
  
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 50 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      blueBalloon();
    }
    if (select_balloon == 3) {
      pinkBalloon();
    }

    if (select_balloon == 4) {
      greenBalloon();
    }
  
  }

  ifTouch();
  
  drawSprites();
  textSize(22)
  text('Score = '+score,270,30)
  
}


// Creating  arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow)
  
}


function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redG.add(red)
  

}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueG.add(blue)
  
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.9;
  pinkG.add(pink)
  
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenG.add(green)
}

function ifTouch(){

  if (arrow_group.isTouching(redG)){
    score+=5;
    red.destroy();
  }

  if (arrow_group.isTouching(blueG)){
    score+=5;
    blue.destroy();
  }

  if (arrow_group.isTouching(pinkG)){
    score+=5;
    pink.destroy();
  }

  if (arrow_group.isTouching(greenG)){
    score+=5;
    green.destroy();
  }

}


function keyReleased() {
  if (keyCode === 32) {
   createArrow()
  }
}

