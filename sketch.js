var snowflake, snowflakeImg;
var bgImg;
var boy, boyImg;

function preload(){
  snowflakeImg = loadImage("snow4.webp");
  bgImg = loadImage("snow2.jpg");
  boyImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  //boy = createSprite(400, 200, 50, 50);
  //boy.addImage(boyImg);
  //boy.scale = 0.5;
  //boy = new BOY(300, 300);
}

function draw() {
  //background(255,255,255);
  background(bgImg);
  drawSprites();
  createSnowflake();

}

function createSnowflake(){
  if(frameCount%10===0){
    snowflake = createSprite(random(0,800), 0, 50, 50);
    snowflake.velocityX = -2;
    snowflake.velocityY = 4;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
    }
}

/*function keyPressed(){
  if(keyCode===32){
    boy.velocityX = -3;
  }
}*/